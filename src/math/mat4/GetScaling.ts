import { IMatrix4 } from './IMatrix4';
import { Vec3 } from '../vec3/Vec3';

export function GetScaling (matrix: IMatrix4, out: Vec3 = new Vec3()): Vec3
{
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [ m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22 ] = matrix.data;

    return out.set(
        Math.hypot(m00, m01, m02),
        Math.hypot(m10, m11, m12),
        Math.hypot(m20, m21, m22)
    );
}
