import { IVec3Like } from '../vec3/IVec3Like';
import { Matrix4 } from './Matrix4';

export function FromRotationXYTranslation (rotation: IVec3Like, position: IVec3Like, translateFirst: boolean = true, out: Matrix4 = new Matrix4()): Matrix4
{
    //  Identity matrix
    const a00 = 1;
    const a01 = 0;
    const a02 = 0;
    const a03 = 0;
    const a10 = 0;
    const a11 = 1;
    const a12 = 0;
    const a13 = 0;
    const a20 = 0;
    const a21 = 0;
    const a22 = 1;
    const a23 = 0;
    let a30 = 0;
    let a31 = 0;
    let a32 = 0;
    let a33 = 1;

    const { x, y, z } = position;

    const sx = Math.sin(rotation.x);
    const cx = Math.cos(rotation.x);

    const sy = Math.sin(rotation.y);
    const cy = Math.cos(rotation.y);

    if (translateFirst)
    {
        // a30 = x + 0 * y + 0 * z;
        a30 = x;

        // a31 = 0 * x + 1 * y + 0 * z;
        a31 = y;

        // a32 = 0 * x + 0 * y + 1 * z;
        a32 = z;

        // a33 = 0 * x + 0 * y + 0 * z + 1;
        // a33 = 1;
    }

    //  Rotate X

    // const b10 = a10 * cx + a20 * sx;
    // const b10 = 0 * cx + 0 * sx;
    const b10 = 0;

    // const b11 = a11 * cx + a21 * sx;
    // const b11 = 1 * cx + 0 * sx;
    const b11 = cx;

    // const b12 = a12 * cx + a22 * sx;
    // const b12 = 0 * cx + 1 * sx;
    const b12 = sx;

    // const b13 = a13 * cx + a23 * sx;
    // const b13 = 0 * cx + 0 * sx;
    const b13 = 0;

    // const b20 = a20 * cx - a10 * sx;
    // const b20 = 0 * cx - 0 * sx;
    const b20 = 0;

    // const b21 = a21 * cx - a11 * sx;
    // const b21 = 0 * cx - 1 * sx;
    const b21 = -sx;

    // const b22 = a22 * cx - a12 * sx;
    // const b22 = 1 * cx - 0 * sx;
    const b22 = cx;

    // const b23 = a23 * cx - a13 * sx;
    // const b23 = 0 * cx - 0 * sx;
    const b23 = 0;

    //  Rotate Y

    // const c00 = a00 * cy - b20 * sy;
    // const c00 = 1 * cy - 0 * sy;
    const c00 = cy;

    // const c01 = a01 * cy - b21 * sy;
    // const c01 = 0 * cy - b21 * sy;
    const c01 = 0 - b21 * sy;

    // const c02 = a02 * cy - b22 * sy;
    // const c02 = 0 * cy - b22 * sy;
    // const c02 = 0 - b22 * sy;
    const c02 = 0 - cx * sy;

    // const c03 = a03 * cy - b23 * sy;
    // const c03 = 0 * cy - b23 * sy;
    // const c03 = 0 * cy - 0 * sy;
    const c03 = 0;

    // const c20 = a00 * sy + b20 * cy;
    // const c20 = 1 * sy + 0 * cy;
    const c20 = sy;

    // const c21 = a01 * sy + b21 * cy;
    // const c21 = 0 * sy + b21 * cy;
    const c21 = b21 * cy;

    // const c22 = a02 * sy + b22 * cy;
    // const c22 = 0 * sy + b22 * cy;
    // const c22 = 0 * sy + cx * cy;
    const c22 = cx * cy;

    // const c23 = a03 * sy + b23 * cy;
    // const c23 = 0 * sy + b23 * cy;
    // const c23 = 0 * sy + 0 * cy;
    const c23 = 0;

    //  Translate
    if (!translateFirst)
    {
        a30 = c00 * x + b10 * y + c20 * z + a30;
        a31 = c01 * x + b11 * y + c21 * z + a31;
        a32 = c02 * x + b12 * y + c22 * z + a32;
        a33 = c03 * x + b13 * y + c23 * z + a33;
    }

    return out.set(
        c00,
        c01,
        c02,
        c03,
        b10,
        b11,
        b12,
        b13,
        c20,
        c21,
        c22,
        c23,
        a30,
        a31,
        a32,
        a33
    );
}
