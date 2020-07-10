import { IMatrix4 } from '../mat4/IMatrix4';
import { Vec3 } from './Vec3';

//  Transforms a Vec3 by a Matrix4, ignoring the right-most column
export function Vec3TransformMat4Zero (a: Vec3, m: IMatrix4, out: Vec3 = new Vec3()): Vec3
{
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [ m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22 ] = m.data;
    const { x, y, z } = a;

    return out.set(
        m00 * x + m10 * y + m20 * z,
        m01 * x + m11 * y + m21 * z,
        m02 * x + m12 * y + m22 * z
    );
}
