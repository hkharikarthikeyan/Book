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

// Pricing.jsx
replaceInFile('d:/Landingpage/src/components/Pricing.jsx', [
    { target: />999</g, replacement: '>219<' },
    { target: /₹999/g, replacement: '₹219' }
]);

// ExitIntentPopup.jsx
replaceInFile('d:/Landingpage/src/components/ExitIntentPopup.jsx', [
    { target: /₹999/g, replacement: '₹219' }
]);

// PaymentModal.jsx
replaceInFile('d:/Landingpage/src/components/PaymentModal.jsx', [
    { target: /₹999/g, replacement: '₹219' }
]);

// StickyCTA.jsx
replaceInFile('d:/Landingpage/src/components/StickyCTA.jsx', [
    { target: /₹999/g, replacement: '₹219' }
]);
