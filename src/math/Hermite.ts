/**
 * Performs a hermite interpolation with two control points.
 *
 * @param {number} a the first operand
 * @param {number} b the second operand
 * @param {number} c the third operand
 * @param {number} d the fourth operand
 * @param {bumber} t interpolation amount, in the range [0-1], between the two inputs
 */
export function Hermite (a: number, b: number, c: number, d: number, t: number): number
{
    const squared = t * t;

    const factor1 = squared * (2 * t - 3) + 1;
    const factor2 = squared * (t - 2) + t;
    const factor3 = squared * (t - 1);
    const factor4 = squared * (3 - 2 * t);

    return a * factor1 + b * factor2 + c * factor3 + d * factor4;
}
