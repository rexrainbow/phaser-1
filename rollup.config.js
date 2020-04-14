import clear from 'rollup-plugin-clear';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import filesize from 'rollup-plugin-filesize';
import command from 'rollup-plugin-command';
import visualizer from 'rollup-plugin-visualizer';
import fs from 'fs-extra';
import copy from 'rollup-plugin-copy';

const extensions = [
    '.js', '.jsx', '.ts', '.tsx'
];

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
            sourcemap: false,
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
                terser(),

                command([
                    `echo "Running tsc ..."`,
                    `tsc`
                ]),

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

        clear({
            targets: [ './dist '],
            watch: true
        }),

        resolve({
            extensions
        }),

        typescript({
            tsconfig: './tsconfig.json'
        }),

        copy({
            targets: [
                { src: 'README.md', dest: 'dist', rename: 'README.md' }
            ]
        }),

        visualizer({
            "title": "Phaser 4 Package Stats",
            "sourcemap": false,
            "template": "treemap" // "circlepacking"
        })

    ]

};