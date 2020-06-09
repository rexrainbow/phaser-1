import { IVec3 } from './IVec3';
import { Normalize } from './Normalize';
import { Scale } from './Scale';
import { Vec3 } from './Vec3';

export function SetLength (a: IVec3, length: number, out: Vec3 = new Vec3()): IVec3
{
    Normalize(a, out);

    return Scale(out, length, out);
}
