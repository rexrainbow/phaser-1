import { Quaternion } from './Quaternion';

export function QuatAdd (a: Quaternion, b: Quaternion, out: Quaternion = new Quaternion()): Quaternion
{
    return out.set(
        a.x + b.x,
        a.y + b.y,
        a.z + b.z,
        a.w + b.w
    );
}
