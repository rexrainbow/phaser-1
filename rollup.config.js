// Can't use official plugin because: https://github.com/rollup/plugins/issues/287 >:-(
// import typescript from '@rollup/plugin-typescript';

import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';
import filesize from 'rollup-plugin-filesize';
import fs from 'fs-extra';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

// Another crashing plugin that used to work (and hopefully will again!):
// import visualizer from 'rollup-plugin-visualizer';

const extensions = [
    '.js', '.jsx', '.ts', '.tsx'
];

const licenseInfo =
`/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2020 Photon Storm Ltd.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
'*/`;

/**
 * Custom Roll-up Plugin that copies the package.json version to the dist package.json
 */
const DistPackagePlugin = {

    name: 'DistPackagePlugin',

    generateBundle () {

        const devPackage = fs.readJsonSync('./package.json');
        const distPackage = fs.readJsonSync('./dist.package.json');

        distPackage.version = devPackage.version;

        fs.writeJsonSync('./dist/package.json', distPackage, { spaces: 4 });

    }

};

export default {

    input: './src/index.ts',

    output: [
        {
            file: './dist/Phaser4.esm.js',
            format: 'es',
            sourcemap: true
        },
        {
            file: './dist/Phaser4.js',
            format: 'umd',
            name: 'Phaser4',
            sourcemap: true,
            plugins: [
                filesize()
            ]
        },
        {
            file: './dist/Phaser4.min.js',
            format: 'umd',
            name: 'Phaser4',
            sourcemap: false,
            plugins: [
                terser({
                    output: {
                        preamble: licenseInfo,
                        comments: false
                    }
                }),
                DistPackagePlugin
            ]
        }
    ],

    onwarn: (warning, next) =>
    {
        if (warning.code === 'DEPRECATED_FEATURE')
        {
            return;
        }
        else
        {
            next(warning);
        }
    },

    plugins: [

        del({
            targets: [ './dist', './stats.html' ],
            runOnce: true
        }),

        resolve({
            extensions
        }),

        typescript({
            tsconfig: './tsconfig.json'
        }),

        copy({
            targets: [
                { src: 'LICENSE', dest: 'dist', copyOnce: true },
                { src: 'README.dist.md', dest: 'dist', rename: 'README.md', copyOnce: true }
            ]
        }),

        //  Currently crashing in version 4.0.4, let's hope they fix it
        // visualizer({
        //     "title": "Phaser 4 Package Stats",
        //     "sourcemap": false,
        //     "template": "treemap" // "circlepacking"
        // })

    ]

};
