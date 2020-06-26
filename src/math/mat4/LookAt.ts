import { IVec3Like } from '../vec3/IVec3Like';
import { Identity } from './Identity';
import { Matrix4 } from './Matrix4';

// Generates a look-at matrix with the given eye position, focal point, and up axis.
// If you want a matrix that actually makes an object look at another object, you should use targetTo instead.

export function LookAt (eye: IVec3Like, center: IVec3Like, up: IVec3Like, out: Matrix4 = new Matrix4()): Matrix4
{
    const { x: eyex, y: eyey, z: eyez } = eye;
    const { x: upx, y: upy, z: upz } = up;
    const { x: centerx, y: centery, z: centerz } = center;

    if (Math.abs(eyex - centerx) < 0.00001 && Math.abs(eyey - centery) < 0.00001 && Math.abs(eyez - centerz) < 0.00001)
    {
        return Identity(out);
    }

    let z0 = eyex - centerx;
    let z1 = eyey - centery;
    let z2 = eyez - centerz;

    let len = 1 / Math.hypot(z0, z1, z2);

    z0 *= len;
    z1 *= len;
    z2 *= len;

    let x0 = upy * z2 - upz * z1;
    let x1 = upz * z0 - upx * z2;
    let x2 = upx * z1 - upy * z0;

    len = Math.hypot(x0, x1, x2);

    if (!len)
    {
        x0 = 0;
        x1 = 0;
        x2 = 0;
    }
    else
    {
        len = 1 / len;
        x0 *= len;
        x1 *= len;
        x2 *= len;
    }

    let y0 = z1 * x2 - z2 * x1;
    let y1 = z2 * x0 - z0 * x2;
    let y2 = z0 * x1 - z1 * x0;

    len = Math.hypot(y0, y1, y2);

    if (!len)
    {
        y0 = 0;
        y1 = 0;
        y2 = 0;
    }
    else
    {
        len = 1 / len;
        y0 *= len;
        y1 *= len;
        y2 *= len;
    }

    return out.set(
        x0,
        y0,
        z0,
        0,
        x1,
        y1,
        z1,
        0,
        x2,
        y2,
        z2,
        0,
        -(x0 * eyex + x1 * eyey + x2 * eyez),
        -(y0 * eyex + y1 * eyey + y2 * eyez),
        -(z0 * eyex + z1 * eyey + z2 * eyez),
        1
    );
}
