import { IMatrix4 } from './IMatrix4';
import { Vec3 } from '../vec3';

export function GetTranslation (matrix: IMatrix4, out: Vec3 = new Vec3()): Vec3
{
    const data = matrix.data;

    return out.set(data[12], data[13], data[14]);
}
