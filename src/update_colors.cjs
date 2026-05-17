const fs = require('fs');
const path = require('path');

const dir = 'd:/Landingpage/src';

function walkSync(currentDirPath, callback) {
    fs.readdirSync(currentDirPath).forEach(function (name) {
        var filePath = path.join(currentDirPath, name);
        var stat = fs.statSync(filePath);
        if (stat.isFile()) {
            callback(filePath, stat);
        } else if (stat.isDirectory()) {
            walkSync(filePath, callback);
        }
    });
}

walkSync(dir, function(filePath) {
    if (filePath.endsWith('.jsx') || filePath.endsWith('.css')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let newContent = content
            .replace(/purple/g, 'bronze')
            .replace(/accent/g, 'amber');
        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log('Updated:', filePath);
        }
    }
});
