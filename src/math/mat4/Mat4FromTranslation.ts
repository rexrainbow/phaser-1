import { IVec3Like } from '../vec3/IVec3Like';
import { Matrix4 } from './Matrix4';

export function Mat4FromTranslation (vec3: IVec3Like, out: Matrix4 = new Matrix4()): Matrix4
{
    const { x, y, z } = vec3;

    return out.set(
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        x, y, z, 1
    );
}
