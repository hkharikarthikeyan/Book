const fs = require('fs');

const replaceInFile = (file, replacements) => {
    try {
        let content = fs.readFileSync(file, 'utf8');
        let original = content;
        replacements.forEach(({target, replacement}) => {
            content = content.replace(target, replacement);
        });
        if (original !== content) {
            fs.writeFileSync(file, content, 'utf8');
            console.log(`Updated ${file}`);
        }
    } catch (e) {
        console.log(`Could not update ${file}: ${e.message}`);
    }
};

// 1. Navbar.jsx
replaceInFile('d:/Landingpage/src/components/Navbar.jsx', [
    {
        target: "'bg-transparent'",
        replacement: "'bg-gradient-to-b from-[#0f0a06]/90 to-transparent'"
    },
    {
        target: "'bg-dark-950/80 backdrop-blur-xl border-b border-white/5 shadow-2xl'",
        replacement: "'bg-[#0f0a06]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl'"
    }
]);

// 2. Hero.jsx
replaceInFile('d:/Landingpage/src/components/Hero.jsx', [
    {
        target: 'pt-24 sm:pt-20',
        replacement: 'pt-32 sm:pt-24 pb-12 sm:pb-20'
    }
]);

// 3. WhatsInside.jsx
replaceInFile('d:/Landingpage/src/components/WhatsInside.jsx', [
    {
        target: 'grid grid-cols-2 gap-4',
        replacement: 'grid grid-cols-1 sm:grid-cols-2 gap-4'
    }
]);

// 4. Testimonials.jsx
replaceInFile('d:/Landingpage/src/components/Testimonials.jsx', [
    {
        target: 'flex items-center gap-1 bg-dark-900/50 rounded-full px-2 py-1',
        replacement: 'flex items-center gap-1 bg-dark-900/80 rounded-full px-2 py-1 relative z-10'
    }
]);

// 5. WhatsAppButton.jsx
replaceInFile('d:/Landingpage/src/components/WhatsAppButton.jsx', [
    {
        target: 'bottom-24 sm:bottom-6 right-4 sm:right-6',
        replacement: 'bottom-24 sm:bottom-6 right-4 sm:right-6 z-[60]'
    }
]);

// 6. RGCCOFormula.jsx
replaceInFile('d:/Landingpage/src/components/RGCCOFormula.jsx', [
    {
        target: 'grid grid-cols-2 md:grid-cols-5',
        replacement: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5'
    }
]);
