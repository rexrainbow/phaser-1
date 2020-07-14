import { IVec3Like } from '../vec3/IVec3Like';
import { Matrix4 } from './Matrix4';

export function Mat4FromRotationXYTranslation (rotation: IVec3Like, position: IVec3Like, translateFirst: boolean = true, out: Matrix4 = new Matrix4()): Matrix4
{
    const { x, y, z } = position;

    const sx = Math.sin(rotation.x);
    const cx = Math.cos(rotation.x);

    const sy = Math.sin(rotation.y);
    const cy = Math.cos(rotation.y);

    let a30 = x;
    let a31 = y;
    let a32 = z;

    //  Rotate X

    const b21 = -sx;

    //  Rotate Y

    const c01 = 0 - b21 * sy;

    const c02 = 0 - cx * sy;

    const c21 = b21 * cy;

    const c22 = cx * cy;

    //  Translate
    if (!translateFirst)
    {
        // a30 = cy * x + 0 * y + sy * z;
        a30 = cy * x + sy * z;
        a31 = c01 * x + cx * y + c21 * z;
        a32 = c02 * x + sx * y + c22 * z;
    }

    return out.set(
        cy,
        c01,
        c02,
        0,
        0,
        cx,
        sx,
        0,
        sy,
        c21,
        c22,
        0,
        a30,
        a31,
        a32,
        1
    );
}
