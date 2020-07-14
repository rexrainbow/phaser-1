import { Vec4 } from './Vec4';

//  Get a Vec4 from a Vec4s floored values

export function Vec4Fract (a: Vec4, out: Vec4 = new Vec4()): Vec4
{
    return out.set(
        a.x - Math.floor(a.x),
        a.y - Math.floor(a.y),
        a.z - Math.floor(a.z),
        a.w - Math.floor(a.w)
    );
}
