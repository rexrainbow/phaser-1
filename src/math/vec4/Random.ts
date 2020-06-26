import { IVec4Like } from './IVec4Like';
import { Vec4 } from './Vec4';

export function Random (a: IVec4Like, scale: number = 1, out: Vec4 = new Vec4()): Vec4
{
    // Marsaglia, George. Choosing a Point from the Surface of a
    // Sphere. Ann. Math. Statist. 43 (1972), no. 2, 645--646.
    // http://projecteuclid.org/euclid.aoms/1177692644;

    let v1;
    let v2;
    let v3;
    let v4;
    let s1;
    let s2;

    do
    {
        v1 = Math.random() * 2 - 1;
        v2 = Math.random() * 2 - 1;
        s1 = v1 * v1 + v2 * v2;
    }
    while (s1 >= 1);

    do
    {
        v3 = Math.random() * 2 - 1;
        v4 = Math.random() * 2 - 1;
        s2 = v3 * v3 + v4 * v4;
    }
    while (s2 >= 1);

    const d = Math.sqrt((1 - s1) / s2);

    return out.set(
        scale * v1,
        scale * v2,
        scale * v3 * d,
        scale * v4 * d
    );
}
