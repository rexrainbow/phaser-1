import { IQuaternionLike } from './IQuaternionLike';
import { Hermite as MathHermite } from '../Hermite';
import { Quaternion } from './Quaternion';

export function Hermite (a: IQuaternionLike, b: IQuaternionLike, c: IQuaternionLike, d: IQuaternionLike, t: number, out: Quaternion = new Quaternion()): Quaternion
{
    return out.set(
        MathHermite(t, a.x, b.x, c.x, d.x),
        MathHermite(t, a.y, b.y, c.y, d.y),
        MathHermite(t, a.z, b.z, c.z, d.z),
        MathHermite(t, a.w, b.w, c.w, d.w)
    );
}
