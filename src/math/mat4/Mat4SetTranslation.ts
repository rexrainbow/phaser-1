import { IVec3Like } from '../vec3/IVec3Like';
import { Matrix4 } from './Matrix4';

export function Mat4SetTranslation (matrix: Matrix4, vec3: IVec3Like): Matrix4
{
    const data = matrix.data;
    const { x, y, z } = vec3;

    data[12] = x;
    data[13] = y;
    data[14] = z;

    matrix.onChange(matrix);

    return matrix;
}
