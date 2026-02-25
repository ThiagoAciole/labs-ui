const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
  const auditResult = execSync('npm audit --json', { encoding: 'utf8', maxBuffer: 50 * 1024 * 1024 });
  processAudit(auditResult);
} catch (error) {
  // npm audit returns non-zero exit code if vulnerabilities are found
  if (error.stdout) {
    processAudit(error.stdout);
  } else {
    console.error(error);
  }
}

function processAudit(auditJson) {
  const audit = JSON.parse(auditJson);
  const vulnerabilities = audit.vulnerabilities;
  const packagesToRemove = Object.keys(vulnerabilities);
  
  console.log('Packages to remove:', packagesToRemove);
  
  if (packagesToRemove.length === 0) {
    console.log('No vulnerabilities found.');
    return;
  }
  
  // Find workspaces and root package.json
  const packagesPaths = [];
  const rootPkgPath = path.join(__dirname, 'package.json');
  if (fs.existsSync(rootPkgPath)) packagesPaths.push(rootPkgPath);
  
  const workspaces = ['packages', 'apps'];
  workspaces.forEach(ws => {
    const wsDir = path.join(__dirname, ws);
    if (fs.existsSync(wsDir)) {
      fs.readdirSync(wsDir).forEach(pkg => {
        const pkgDir = path.join(wsDir, pkg);
        if (fs.statSync(pkgDir).isDirectory()) {
          const pkgPath = path.join(pkgDir, 'package.json');
          if (fs.existsSync(pkgPath)) {
            packagesPaths.push(pkgPath);
          }
        }
      });
    }
  });
  
  console.log('Checking package.json files:', packagesPaths);
  
  packagesPaths.forEach(pkgPath => {
    let pkgJson = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    let changed = false;
    
    ['dependencies', 'devDependencies', 'peerDependencies'].forEach(depType => {
      if (pkgJson[depType]) {
        packagesToRemove.forEach(vulnPkg => {
          if (pkgJson[depType][vulnPkg]) {
            console.log(`Removing ${vulnPkg} from ${pkgPath} (${depType})`);
            delete pkgJson[depType][vulnPkg];
            changed = true;
          }
        });
      }
    });
    
    if (changed) {
      fs.writeFileSync(pkgPath, JSON.stringify(pkgJson, null, 2) + '\n', 'utf8');
      console.log(`Updated ${pkgPath}`);
    }
  });
}
