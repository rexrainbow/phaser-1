/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
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
export default function SinCosTableGenerator(length, sinAmp = 1, cosAmp = 1, frequency = 1) {
    frequency *= Math.PI / length;
    const cos = [];
    const sin = [];
    for (let c = 0; c < length; c++) {
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
//# sourceMappingURL=SinCosTableGenerator.js.map