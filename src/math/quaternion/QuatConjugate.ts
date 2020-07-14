import { Quaternion } from './Quaternion';

export function QuatConjugate (a: Quaternion, out: Quaternion = new Quaternion()): Quaternion
{
    const { x, y, z, w } = a;

    return out.set(
        x * -1,
        y * -1,
        z * -1,
        w
    );
}
