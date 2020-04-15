/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

 /**
 * @typedef {object} Phaser.Types.Math.SinCosTable
 * @since 3.0.0
 *
 * @property {number[]} sin - The sine values.
 * @property {number[]} cos - The cosine values.
 * @property {number} length - The length.
 */

type SinCosTable = { sin: number[], cos: number[], length: number };

/**
 * Generate a series of sine and cosine values.
 *
 * @function Phaser.Math.SinCosTableGenerator
 * @since 3.0.0
 *
 * @param {number} length - The number of values to generate.
 * @param {number} [sinAmp=1] - The sine value amplitude.
 * @param {number} [cosAmp=1] - The cosine value amplitude.
 * @param {number} [frequency=1] - The frequency of the values.
 *
 * @return {SinCosTable} The generated values.
 */
export default function SinCosTableGenerator (length: number, sinAmp: number = 1, cosAmp: number = 1, frequency: number = 1): SinCosTable
{
    frequency *= Math.PI / length;

    const cos = [];
    const sin = [];

    for (let c = 0; c < length; c++)
    {
        cosAmp -= sinAmp * frequency;
        sinAmp += cosAmp * frequency;

        cos[c] = cosAmp;
        sin[c] = sinAmp;
    }

    return {
        sin,
        cos,
        length
    };
}
