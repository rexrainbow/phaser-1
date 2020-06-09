/**
 * Performs a bezier interpolation with two control points.
 *
 * @param {number} a the first operand
 * @param {number} b the second operand
 * @param {number} c the third operand
 * @param {number} d the fourth operand
 * @param {bumber} t interpolation amount, in the range [0-1], between the two inputs
 */
export function Bezier (a: number, b: number, c: number, d: number, t: number): number
{
    const inverseFactor = 1 - t;
    const inverseFactorTimesTwo = inverseFactor * inverseFactor;
    const factorTimes2 = t * t;
    const factor1 = inverseFactorTimesTwo * inverseFactor;
    const factor2 = 3 * t * inverseFactorTimesTwo;
    const factor3 = 3 * factorTimes2 * inverseFactor;
    const factor4 = factorTimes2 * t;

    return a * factor1 + b * factor2 + c * factor3 + d * factor4;
}
