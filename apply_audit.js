const fs = require('fs');

// Actually, let's use a simpler native recursive search to avoid dependencies
const path = require('path');

function getFiles(dir, files = []) {
    const fileList = fs.readdirSync(dir);
    for (const file of fileList) {
        const name = `${dir}/${file}`;
        if (fs.statSync(name).isDirectory()) {
            getFiles(name, files);
        } else if (name.endsWith('.tsx') || name.endsWith('.ts')) {
            files.push(name);
        }
    }
    return files;
}

const foldersToScan = ['app', 'components'];
const files = [];
foldersToScan.forEach(folder => {
    if (fs.existsSync(folder)) {
        getFiles(folder, files);
    }
});

let updatedCount = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // 1. Shadow Physics
    content = content.replace(/hover:-translate-y-\[1px\] hover:-translate-x-\[1px\] hover:shadow-\[6px_6px_0px_0px_/g, 'hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_');
    content = content.replace(/hover:-translate-y-1 hover:-translate-x-1 hover:shadow-\[8px_8px_0px_0px_/g, 'hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0px_0px_');
    content = content.replace(/hover:-translate-y-1 hover:-translate-x-1 hover:shadow-\[10px_10px_0px_0px_/g, 'hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_');

    // 2. Padding consistency
    content = content.replace(/py-24/g, 'py-16 md:py-24');
    content = content.replace(/py-20/g, 'py-16 md:py-20');

    // Fix cases where it becomes py-16 md:py-16 md:py-24 if already applied
    content = content.replace(/py-16 md:py-16 md:py-24/g, 'py-16 md:py-24');
    content = content.replace(/py-16 md:py-16 md:py-20/g, 'py-16 md:py-20');

    // 3. Typgraphy heading standardisation
    content = content.replace(/text-3xl md:text-4xl lg:text-5xl/g, 'text-4xl md:text-5xl');
    content = content.replace(/text-4xl md:text-5xl lg:text-6xl/g, 'text-4xl md:text-5xl');

    if (content !== original) {
        fs.writeFileSync(file, content);
        updatedCount++;
        console.log(`Updated ${file}`);
    }
});

console.log(`Successfully updated ${updatedCount} files.`);
