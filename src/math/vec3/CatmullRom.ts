import { IVec3 } from './IVec3';
import { CatmullRom as MathCatmullRom } from '../CatmullRom';
import { Vec3 } from './Vec3';

// Gets a new Vector3 for float t on the CatmullRom spline defined by the 4 points

export function CatmullRom (p1: IVec3, p2: IVec3, p3: IVec3, p4: IVec3, t: number, out: Vec3 = new Vec3()): IVec3
{
    return out.set(
        MathCatmullRom(t, p1.x, p2.x, p3.x, p4.x),
        MathCatmullRom(t, p1.y, p2.y, p3.y, p4.y),
        MathCatmullRom(t, p1.z, p2.z, p3.z, p4.z)
    );
}
