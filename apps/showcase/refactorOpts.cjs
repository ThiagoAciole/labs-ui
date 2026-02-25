const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, 'src', 'pages');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function (file) {
        let filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(filePath));
        } else if (filePath.endsWith('.tsx')) {
            results.push(filePath);
        }
    });
    return results;
}

const files = walk(PAGES_DIR);

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    let importsNeeded = new Set();
    
    // Replace COLOR_OPTIONS
    content = content.replace(/options:\s*\[(?:[^\]]*?'primary'[^\]]*?'neutral'|[^\]]*?'neutral'[^\]]*?'primary')[^\]]*\]/gs, () => {
        importsNeeded.add('COLOR_OPTIONS');
        return "options: COLOR_OPTIONS";
    });
    
    // Replace VARIANT_OPTIONS
    content = content.replace(/options:\s*\[[^\]]*?'solid'[^\]]*?'ghost'[^\]]*\]/gs, () => {
        importsNeeded.add('VARIANT_OPTIONS');
        return "options: VARIANT_OPTIONS";
    });

    // Replace SIZE_OPTIONS
    content = content.replace(/options:\s*\[[^\]]*?'sm'[^\]]*?'lg'[^\]]*\]/gs, () => {
        importsNeeded.add('SIZE_OPTIONS');
        return "options: SIZE_OPTIONS";
    });
    
    // XL size sizes
    content = content.replace(/options:\s*\[[^\]]*?'xs'[^\]]*?'xl'[^\]]*\]/gs, () => {
        importsNeeded.add('SIZE_OPTIONS');
        return "options: SIZE_OPTIONS";
    });
    
    // Replace ICON_OPTIONS mapped array
    content = content.replace(/options:\s*availableIcons\.map\([^\)]+\)\s*\}\s*\)\)/gs, () => {
        importsNeeded.add('ICON_OPTIONS');
        return "options: ICON_OPTIONS";
    });
    
    // Replace ORIENTATION_OPTIONS
    content = content.replace(/options:\s*\[[^\]]*?'horizontal'[^\]]*?'vertical'[^\]]*\]/gs, () => {
        importsNeeded.add('ORIENTATION_OPTIONS');
        return "options: ORIENTATION_OPTIONS";
    });

    if (content !== original) {
        // Find exact relative path to commonOptions.tsx
        let depth = file.split(path.sep).length - file.indexOf('src' + path.sep) - 2;
        let prefix = depth === 1 ? '../' : depth === 2 ? '../../' : depth === 3 ? '../../../' : '';
        let p = prefix + 'config/categories/commonOptions';
        
        // Ensure imports aren't duplicated
        if (!content.includes('config/categories/commonOptions')) {
            let importStatement = `import { ${Array.from(importsNeeded).join(', ')} } from '${p}';\n`;
            content = content.replace(/import.*?['"];?\n/, match => match + importStatement);
        }
        
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated ' + file);
    }
});
