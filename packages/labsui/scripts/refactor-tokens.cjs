const fs = require('fs');
const path = require('path');

const dir = 'c:\\\\Source\\\\LabsUI\\\\packages\\\\labsui\\\\src\\\\components';

const mappings = [
  // color specific replacements
  { regex: /color:\s*var\(--color--violet\)/g, replacement: 'color: var(--text-primary)' },
  { regex: /color:\s*var\(--color--gray\)/g, replacement: 'color: var(--text-gray)' },
  { regex: /color:\s*var\(--color--grayDark\)/g, replacement: 'color: var(--text-gray)' },
  { regex: /color:\s*var\(--color--grayLight\)/g, replacement: 'color: var(--text-disabled)' },
  { regex: /color:\s*var\(--color--red\)/g, replacement: 'color: var(--text-error)' },
  { regex: /color:\s*var\(--color--green\)/g, replacement: 'color: var(--text-success)' },
  { regex: /color:\s*var\(--color--yellow\)/g, replacement: 'color: var(--text-attention)' },

  // background specific replacements
  { regex: /background(-color)?:\s*var\(--color--violet\)/g, replacement: 'background$1: var(--bg-primary)' },
  { regex: /background(-color)?:\s*var\(--color--violetLight\)/g, replacement: 'background$1: var(--bg-primary-light)' },
  { regex: /background(-color)?:\s*var\(--color--gray\)/g, replacement: 'background$1: var(--surface-inverse)' },
  { regex: /background(-color)?:\s*var\(--color--grayLight\)/g, replacement: 'background$1: var(--surface-alt)' },
  { regex: /background(-color)?:\s*var\(--color--grayDark\)/g, replacement: 'background$1: var(--surface-inverse)' },
  { regex: /background(-color)?:\s*var\(--color--red\)/g, replacement: 'background$1: var(--bg-error)' },

  // border specific replacements
  { regex: /border(-color|-top|-right|-bottom|-left)?:\s*([^;]*)var\(--color--violet\)/g, replacement: 'border$1: $2var(--border-primary)' },
  { regex: /border(-color|-top|-right|-bottom|-left)?:\s*([^;]*)var\(--color--gray(?:Light|Dark)?\)/g, replacement: 'border$1: $2var(--border-gray)' },
  { regex: /border(-color|-top|-right|-bottom|-left)?:\s*([^;]*)var\(--color--red\)/g, replacement: 'border$1: $2var(--border-error)' },

  // SVG specific replacements
  { regex: /fill:\s*var\(--color--violet\)/g, replacement: 'fill: var(--bg-primary)' },
  { regex: /stroke:\s*var\(--color--violet\)/g, replacement: 'stroke: var(--border-primary)' },

  // Generic fallbacks
  { regex: /var\(--color--violet\)/g, replacement: 'var(--bg-primary)' },
  { regex: /var\(--color--violetLight\)/g, replacement: 'var(--bg-primary-light)' },
  { regex: /var\(--color--gray\)/g, replacement: 'var(--text-gray)' },
  { regex: /var\(--color--grayLight\)/g, replacement: 'var(--surface-alt)' },
  { regex: /var\(--color--grayDark\)/g, replacement: 'var(--text-disabled)' },
  { regex: /var\(--color--red\)/g, replacement: 'var(--text-error)' },
  { regex: /var\(--color--green\)/g, replacement: 'var(--text-success)' },
  { regex: /var\(--color--yellow\)/g, replacement: 'var(--text-attention)' }
];

function processDir(currentDir) {
    const files = fs.readdirSync(currentDir);
    for (const file of files) {
        const fullPath = path.join(currentDir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.css') || fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let updated = content;
            for (const map of mappings) {
                updated = updated.replace(map.regex, map.replacement);
            }
            if (content !== updated) {
                fs.writeFileSync(fullPath, updated, 'utf8');
                console.log('Updated: ' + fullPath);
            }
        }
    }
}
processDir(dir);
