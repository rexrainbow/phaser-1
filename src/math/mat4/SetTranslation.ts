import { IMatrix4 } from './IMatrix4';
import { IVec3 } from '../vec3/IVec3';

export function SetTranslation (matrix: IMatrix4, vec3: IVec3): IMatrix4
{
    const data = matrix.data;
    const { x, y, z } = vec3;

    data[12] = x;
    data[13] = y;
    data[14] = z;

    return matrix;
}
