import { IVec4 } from './IVec4';
import { Vec4 } from './Vec4';

export function Negate (a: IVec4, out: Vec4 = new Vec4()): IVec4
{
    return out.set(
        -a.x,
        -a.y,
        -a.z,
        -a.w
    );
}
