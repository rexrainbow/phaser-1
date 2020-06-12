import { IMatrix4 } from './IMatrix4';
import { IVec3 } from '../vec3/IVec3';
import { Matrix4 } from './Matrix4';

export function FromScaling (vec3: IVec3, out: Matrix4 = new Matrix4()): IMatrix4
{
    const { x, y, z } = vec3;

    return out.set(
        x, 0, 0, 0,
        0, y, 0, 0,
        0, 0, z, 0,
        0, 0, 0, 1
    );
}
