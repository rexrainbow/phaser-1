import { IVec4 } from './IVec4';
import { Vec4 } from './Vec4';

export function ScaleAndAdd (a: IVec4, b: IVec4, scalar: number, out: Vec4 = new Vec4()): IVec4
{
    return out.set(
        a.x + b.x * scalar,
        a.y + b.y * scalar,
        a.z + b.z * scalar,
        a.w + b.w * scalar
    );
}
