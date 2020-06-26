import { IVec4Like } from './IVec4Like';
import { Vec4 } from './Vec4';

export function DivideScalar (a: IVec4Like, scalar: number, out: Vec4 = new Vec4()): Vec4
{
    const { x, y, z, w } = a;

    return out.set(
        x / scalar,
        y / scalar,
        z / scalar,
        w / scalar
    );
}
