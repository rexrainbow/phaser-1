// Can't use official plugin because: https://github.com/rollup/plugins/issues/287 >:-(
// import typescript from '@rollup/plugin-typescript';

import clear from 'rollup-plugin-clear';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

const extensions = [
    '.js', '.jsx', '.ts', '.tsx'
];

export default {

    input: './src/index.ts',

    output: [
        {
            file: './dist/Phaser4.esm.js',
            format: 'es',
            sourcemap: true
        }
    ],

    plugins: [

        clear({
            targets: [ './dist', './stats.html' ],
            watch: true
        }),

        resolve({
            extensions
        }),

        typescript({
            tsconfig: './tsconfig.json'
        })

    ]

};