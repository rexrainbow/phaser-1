import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

const extensions = [
    '.js', '.jsx', '.ts', '.tsx'
];

export default {

    input: './dev/index.ts',

    output: [
        {
            file: './dev/index.js',
            format: 'iife',
            name: 'Phaser4Example',
            sourcemap: true
        }
    ],

    plugins: [

        resolve({
            extensions
        }),

        typescript({
            tsconfig: './dev.tsconfig.json'
        })

    ]

};