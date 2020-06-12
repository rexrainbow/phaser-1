import { IMatrix4 } from './IMatrix4';
import { IVec3 } from '../vec3/IVec3';
import { Matrix4 } from './Matrix4';

export function FromTranslation (vec3: IVec3, out: Matrix4 = new Matrix4()): IMatrix4
{
    const { x, y, z } = vec3;

    return out.set(
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        x, y, z, 1
    );
}
