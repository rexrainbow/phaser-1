// import dirTree from 'directory-tree';

const fs = require("fs");
const dirTree = require("directory-tree");

const filterConfig = {
    extensions: /\.ts/,
    exclude: /src\\_wip/
};

const inputBundle = {};

/*
item structure:

{ path: 'src\\utils\\base64\\Base64ToArrayBuffer.ts',
  name: 'Base64ToArrayBuffer.ts',
  size: 2019,
  extension: '.ts',
  type: 'file' }
*/

const filteredTree = dirTree('src', filterConfig, (item, path) =>
{
    //  First we need to see if this is an interface and bail out
    //  The quickest test is if the filename starts with a capital I:

    if (item.name.substring(0, 1) === 'I')
    {
        //  Now we need to actually check inside the file *sigh*
        const fileContents = fs.readFileSync(item.path, 'utf8');

        if (fileContents.includes('export interface'))
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

    inputBundle[entryPoint] = itemPath;

    // console.log(entryPoint);
});

console.log(inputBundle);
