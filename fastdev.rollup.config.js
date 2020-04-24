import clear from 'rollup-plugin-clear';
import copy from 'rollup-plugin-copy';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

const extensions = [
    '.js', '.jsx', '.ts', '.tsx'
];

export default {

    input: './dev/index.ts',

    output: [
        {
            file: './dev/dist/index.js',
            format: 'iife',
            name: 'Phaser4Example',
            sourcemap: true
        }
    ],

    plugins: [

        resolve({
            extensions
        }),

        clear('dev/dist'),

        typescript({
            tsconfig: './fastdev.tsconfig.json'
        }),

        copy({
            targets: [
                { src: 'dev/index.html', dest: 'dev/dist', copyOnce: true }
            ]
        })

    ]

};
