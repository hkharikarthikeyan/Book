import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '')
  const sheetsUrl = new URL(env.VITE_GOOGLE_SHEETS_URL)

  return {
    plugins: [react(), tailwindcss()],
    server: {
      proxy: {
        '/api/google-reviews': {
          target: sheetsUrl.origin,
          changeOrigin: true,
          rewrite: () => sheetsUrl.pathname,
        },
      },
    },
  }
})
