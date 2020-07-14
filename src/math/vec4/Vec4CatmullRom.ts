import { CatmullRom } from '../CatmullRom';
import { IVec4Like } from './IVec4Like';
import { Vec4 } from './Vec4';

export function Vec4CatmullRom (p1: IVec4Like, p2: IVec4Like, p3: IVec4Like, p4: IVec4Like, t: number, out: Vec4 = new Vec4()): Vec4
{
    return out.set(
        CatmullRom(t, p1.x, p2.x, p3.x, p4.x),
        CatmullRom(t, p1.y, p2.y, p3.y, p4.y),
        CatmullRom(t, p1.z, p2.z, p3.z, p4.z),
        CatmullRom(t, p1.w, p2.w, p3.w, p4.w)
    );
}
