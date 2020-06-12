import { IMatrix4 } from './IMatrix4';
import { IVec3 } from '../vec3/IVec3';
import { Vec3 } from '../vec3';

export function GetTranslation (mat: IMatrix4, out: IVec3 = new Vec3()): IVec3
{
    const data = mat.data;

    return out.set(data[12], data[13], data[14]);
}
