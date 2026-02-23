const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, 'packages', 'labsui', 'src', 'icons');
const files = fs.readdirSync(iconsDir).filter(f => f.endsWith('.svg'));

const renameMap = {};

files.forEach(file => {
  const ext = path.extname(file);
  const baseName = path.basename(file, ext);
  const parts = baseName.split('-');
  
  if (parts.length > 2) {
    // Pegar apenas as duas primeiras palavras (ou algo com sentido)
    const newName = parts.slice(0, 2).join('-') + ext;
    
    // Se o novo nome já existir, adicionar um sufixo
    let finalName = newName;
    let counter = 1;
    while (files.includes(finalName) && finalName !== file) {
      finalName = parts[0] + '-' + parts[1] + counter + ext;
      counter++;
    }
    
    const oldPath = path.join(iconsDir, file);
    const newPath = path.join(iconsDir, finalName);
    
    fs.renameSync(oldPath, newPath);
    renameMap[baseName] = path.basename(finalName, ext);
  }
});

console.log('Renamed Icons:', renameMap);
