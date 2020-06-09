import { IVec4 } from './IVec4';
import { Vec4 } from './Vec4';

export function AddScalar (a: IVec4, scalar: number, out: Vec4 = new Vec4()): IVec4
{
    return out.set(
        a.x + scalar,
        a.y + scalar,
        a.z + scalar,
        a.w + scalar
    );
}
