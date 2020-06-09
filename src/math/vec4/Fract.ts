import { IVec4 } from './IVec4';
import { Vec4 } from './Vec4';

//  Get a Vec4 from a Vec4s floored values

export function Fract (a: IVec4, out: Vec4 = new Vec4()): IVec4
{
    return out.set(
        a.x - Math.floor(a.x),
        a.y - Math.floor(a.y),
        a.z - Math.floor(a.z),
        a.w - Math.floor(a.w)
    );
}
