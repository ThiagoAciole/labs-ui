const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, 'packages/labsui/src/icons');
const files = fs.readdirSync(iconsDir).filter(f => f.endsWith('.tsx') && !f.includes('core-icons'));

files.forEach(file => {
    const fullPath = path.join(iconsDir, file);
    const content = fs.readFileSync(fullPath, 'utf8');

    // Extrair viewBox
    const viewBoxMatch = content.match(/viewBox:\s*['"]([^'"]+)['"]/);
    const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';

    // Extrair qualquer coisa começando com < e terminando antes de }; ou isFilled
    const pathMatch = content.match(/path:\s*(<[\s\S]*?>[\s\S]*?(?:<\/.*?>)?)\s*(?:,?\s*};|,?\s*isFilled)/);

    if (pathMatch) {
        let svgContent = pathMatch[1].trim();
        svgContent = svgContent.replace(/^<>\s*([\s\S]*?)\s*<\/?>$/, '$1');
        
        svgContent = svgContent.replace(/strokeWidth=/g, 'stroke-width=');
        svgContent = svgContent.replace(/strokeLinecap=/g, 'stroke-linecap=');
        svgContent = svgContent.replace(/strokeLinejoin=/g, 'stroke-linejoin=');
        svgContent = svgContent.replace(/fillRule=/g, 'fill-rule=');
        svgContent = svgContent.replace(/clipRule=/g, 'clip-rule=');
        svgContent = svgContent.replace(/clipPath=/g, 'clip-path=');

        const finalSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" width="24" height="24">\n  ${svgContent}\n</svg>`;
        
        const baseName = path.basename(file, '.tsx');
        const svgPath = path.join(iconsDir, `${baseName}.svg`);
        fs.writeFileSync(svgPath, finalSvg);
        
        fs.unlinkSync(fullPath);
        console.log(`Converted ${baseName} to SVG`);
    } else {
        console.log(`Still failed to match path in ${file}`);
    }
});

// Rescrever o index.ts usando as extenções .svg
const allSvgs = fs.readdirSync(iconsDir).filter(f => f.endsWith('.svg'));
let indexTs = `import { IconName } from '../components/Icon/IconDef';\n\n`;

const names = [];

allSvgs.forEach(svgFile => {
    const baseName = path.basename(svgFile, '.svg');
    const camelName = baseName.replace(/-([a-z])/g, g => g[1].toUpperCase());
    indexTs += `import ${camelName} from './${baseName}.svg?react';\n`;
    names.push({ original: baseName, camel: camelName });
});

indexTs += `\nexport const icons: Record<IconName, any> = {\n`;
names.forEach(n => {
    if (n.original.includes('-')) {
        indexTs += `    '${n.original}': ${n.camel},\n`;
    } else {
        indexTs += `    ${n.original}: ${n.camel},\n`;
    }
});
indexTs += `};\n`;

fs.writeFileSync(path.join(iconsDir, 'index.ts'), indexTs);
console.log('index.ts regenerated.');
