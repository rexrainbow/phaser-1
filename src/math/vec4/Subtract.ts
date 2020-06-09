import { IVec4 } from './IVec4';
import { Vec4 } from './Vec4';

export function Subtract (a: IVec4, b: IVec4, out: Vec4 = new Vec4()): IVec4
{
    return out.set(
        a.x - b.x,
        a.y - b.y,
        a.z - b.z,
        a.w - b.w
    );
}
