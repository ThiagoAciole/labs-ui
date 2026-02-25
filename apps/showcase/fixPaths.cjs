const fs = require('fs');
const path = require('path');
const PAGES_DIR = path.join(process.cwd(), 'src', 'pages');

function walk(dir) {
    let results = [];
    fs.readdirSync(dir).forEach(file => {
        let filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            results = results.concat(walk(filePath));
        } else if (filePath.endsWith('.tsx')) {
            results.push(filePath);
        }
    });
    return results;
}

walk(PAGES_DIR).forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Find any incorrect or correct imports of commonOptions
    let match = content.match(/import\s*\{[^}]*\}\s*from\s*['"](?:\.\.\/)*config\/categories\/commonOptions['"]/g);
    
    if (match) {
        let parts = file.split(path.sep);
        let srcIndex = parts.indexOf('src');
        let depth = parts.length - srcIndex - 2; // e.g. src/pages/Cat/File.tsx -> parts.length=4, srcIndex=0 -> depth=2
        
        // Depth 1 means direct children: src/pages/Button.tsx (depth = 3 - 0 - 2 = 1) -> ../config
        // Depth 2 means nested: src/pages/Form/Button.tsx (depth = 4 - 0 - 2 = 2) -> ../../config
        let prefix = depth === 1 ? '../' : depth === 2 ? '../../' : depth === 3 ? '../../../' : '';
        let correctPath = prefix + 'config/categories/commonOptions';
        
        let newContent = content.replace(/(import\s*\{[^}]*\}\s*from\s*)['"](?:\.\.\/)*config\/categories\/commonOptions['"]/g, '$1\'' + correctPath + '\'');
        
        if (newContent !== content) {
            fs.writeFileSync(file, newContent, 'utf8');
            console.log('Fixed path in ' + file);
        }
    }
});
