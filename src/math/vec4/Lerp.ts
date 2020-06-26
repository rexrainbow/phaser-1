import { IVec4Like } from './IVec4Like';
import { Vec4 } from './Vec4';

// t - interpolation amount, in the range [0-1], between the two inputs

export function Lerp (a: IVec4Like, b: IVec4Like, t: number, out: Vec4 = new Vec4()): Vec4
{
    const { x, y, z, w } = a;

    return out.set(
        x + t * (b.x - x),
        y + t * (b.y - y),
        z + t * (b.z - z),
        w + t * (b.w - w)
    );
}
