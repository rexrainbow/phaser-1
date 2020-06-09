import { IVec4 } from './IVec4';
import { CatmullRom as MathCatmullRom } from '../CatmullRom';
import { Vec4 } from './Vec4';

// Gets a new Vector3 for float t on the CatmullRom spline defined by the 4 points

export function CatmullRom (p1: IVec4, p2: IVec4, p3: IVec4, p4: IVec4, t: number, out: Vec4 = new Vec4()): IVec4
{
    return out.set(
        MathCatmullRom(t, p1.x, p2.x, p3.x, p4.x),
        MathCatmullRom(t, p1.y, p2.y, p3.y, p4.y),
        MathCatmullRom(t, p1.z, p2.z, p3.z, p4.z),
        MathCatmullRom(t, p1.w, p2.w, p3.w, p4.w)
    );
}
