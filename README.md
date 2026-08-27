# RGCCO Landing Page

## Reviews with Google Sheets

Reviews are stored and loaded through a Google Apps Script web app. Create a Google Sheet with a tab named `Reviews`, then add these headers in row 1:

`id` | `name` | `role` | `rating` | `text` | `createdAt`

Create an Apps Script project from the sheet and paste in the code from [`public/google-apps-script.js`](public/google-apps-script.js). Deploy it as a web app with access set to `Anyone`, then put its `/exec` URL in `.env`:

```env
VITE_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/YOUR_WEB_APP_ID/exec
```

Restart Vite after changing `.env`.

The local Vite server proxies review requests through `/api/google-reviews`, because Google Apps Script web apps do not return browser-readable CORS headers. A production deployment must provide the same server-side proxy and set the frontend request URL to that proxy; the Apps Script `/exec` URL should not be called directly by production browser code.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
