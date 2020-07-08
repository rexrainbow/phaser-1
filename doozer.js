const fs = require('fs-extra');
const dirTree = require('directory-tree');
const { build } = require('esbuild');

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

fs.emptyDirSync('./tempdist');

//  Copy package.json version number to dist/package.json

console.log('✔ The doozers are building Phaser 4');

//  Run esbuild

build({
    entryPoints: [ './src/index.ts' ],
    outdir: './tempdist',
    bundle: true,
    sourcemap: true,
    target: 'es6',
    format: 'esm',
    splitting: true
}).catch(() => {
    console.log('❌ esbuild error');
    return;
});

//  For when esbuild supports multiple entry points with the same name

// build({
//     entryPoints: ESMInputBundle,
//     outdir: './tempdist/',
//     minify: false,
//     bundle: false,
// }).catch(() => process.exit(1));

//  Run tsc

console.log('✔ Complete');

