import { IMatrix4 } from './IMatrix4';
import { IVec3 } from '../vec3/IVec3';
import { Vec3 } from '../vec3';

export function GetScaling (matrix: IMatrix4, out: IVec3 = new Vec3()): IVec3
{
    const [ m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22 ] = matrix.data;

    return out.set(
        Math.hypot(m00, m01, m02),
        Math.hypot(m10, m11, m12),
        Math.hypot(m20, m21, m22)
    );
}
