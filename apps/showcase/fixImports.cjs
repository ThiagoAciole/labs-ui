const fs = require('fs');
const path = require('path');
const PAGES_DIR = path.join(process.cwd(), 'src', 'pages');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
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
    let allOptions = ['COLOR_OPTIONS', 'VARIANT_OPTIONS', 'SIZE_OPTIONS', 'ICON_OPTIONS', 'ORIENTATION_OPTIONS', 'PLACEMENT_OPTIONS'];
    
    let needed = [];
    allOptions.forEach(opt => {
        if (content.includes(opt) && !content.includes('import { ' + opt)) {
            needed.push(opt);
        }
    });
    
    if (needed.length > 0) {
        let depth = file.split(path.sep).length - file.indexOf('src' + path.sep) - 2;
        let prefix = depth === 1 ? '../' : depth === 2 ? '../../' : depth === 3 ? '../../../' : '';
        let p = prefix + 'config/categories/commonOptions';
        
        let allNeeded = [];
        allOptions.forEach(opt => {
            if (content.includes(opt)) allNeeded.push(opt);
        });
        
        // Let's remove any existing commonOptions imports
        content = content.replace(/import\s*\{[^}]*\}\s*from\s*['"][^'"]*commonOptions['"];?\r?\n/g, '');
        
        let importStmt = `import { ${allNeeded.join(', ')} } from '${p}';\n`;
        
        // Add after the first import block
        content = content.replace(/^(import.*?(?:\r?\n))/, `$1${importStmt}`);
        
        fs.writeFileSync(file, content, 'utf8');
        console.log('Fixed imports in ' + file);
    }
});
