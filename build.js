const fs = require('fs-extra');
const dirTree = require('directory-tree');
const { build } = require('esbuild');
const { exec } = require('child_process');

const filterConfig = {
    extensions: /\.ts/,
    exclude: [
        /src\\stats/,
        /src\/stats/
    ]
};

const ESMInputBundle = [];

dirTree('src', filterConfig, (item, path) =>
{
    /*
    item structure:

    { path: 'src\\utils\\base64\\Base64ToArrayBuffer.ts',
    name: 'Base64ToArrayBuffer.ts',
    size: 2019,
    extension: '.ts',
    type: 'file' }
    */

    //  First we need to see if this is an interface and bail out
    //  The quickest test is if the filename starts with a capital I:

    if (item.name.substring(0, 1) === 'I')
    {
        //  Now we need to actually check inside the file *sigh*
        const fileContents = fs.readFileSync(item.path, 'utf8');

        if (fileContents.includes('export interface') || fileContents.includes('export type'))
        {
            // console.log('Ignoring interface ' + item.name);
            return;
        }
    }

    const itemPath = path.dirname(item.path);

    //  Take the item path and put it into an array
    const parts = itemPath.split(path.sep);

    //  Remove the src\ part from the dir array (the first entry)
    parts.shift();

    //  Turn back, always use / as Rollup requires it
    const dir = parts.join('/');

    const name = item.name.substring(0, item.name.length - item.extension.length);

    const entryPoint = (dir === '') ? name : dir + '/' + name;

    ESMInputBundle.push(item.path);
    // ESMInputBundle[entryPoint] = item.path;
});

//  Clear folder contents

console.log('✔ Clearing target');

fs.emptyDirSync('./dist');

//  Copy package.json version number to dist/package.json

console.log('✔ Copying dist files');

const devPackage = fs.readJsonSync('./package.json');
const distPackage = fs.readJsonSync('./dist.package.json');

distPackage.version = devPackage.version;

fs.writeJsonSync('./dist/package.json', distPackage, { spaces: 4 });

//  Copy other files we need
fs.copySync('./LICENSE', './dist/LICENSE');
fs.copySync('./logo.png', './dist/logo.png');
fs.copySync('./README.dist.md', './dist/README.md');

console.log('✔ Building Phaser 4');

//  Run esbuild

build({
    entryPoints: ESMInputBundle,
    outdir: './dist/',
    target: 'es6',
    minify: false,
    bundle: false,
}).catch(() => {
    console.log('❌ esbuild error');
    return;
});

//  Run tsc

console.log('✔ Building TypeScript defs');

exec('tsc --build ./tsconfig.json', (error, stdout, stderr) => {
    if (error) {
        console.log(`❌ error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`❌ stderr: ${stderr}`);
        return;
    }
    console.log('✔ Complete (๑˃̵ᴗ˂̵)و');
});
