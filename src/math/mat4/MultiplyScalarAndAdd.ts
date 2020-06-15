import { IMatrix4 } from './IMatrix4';
import { Matrix4 } from './Matrix4';

// Adds two mat4's after multiplying each element of the second operand by a scalar value.

export function MultiplyScalarAndAdd (a: IMatrix4, b: IMatrix4, scale: number, out: Matrix4 = new Matrix4()): IMatrix4
{
    const [ a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33 ] = a.data;
    const [ b00, b01, b02, b03, b10, b11, b12, b13, b20, b21, b22, b23, b30, b31, b32, b33 ] = b.data;

    return out.set(
        a00 + b00 * scale,
        a01 + b01 * scale,
        a02 + b02 * scale,
        a03 + b03 * scale,
        a10 + b10 * scale,
        a11 + b11 * scale,
        a12 + b12 * scale,
        a13 + b13 * scale,
        a20 + b20 * scale,
        a21 + b21 * scale,
        a22 + b22 * scale,
        a23 + b23 * scale,
        a30 + b30 * scale,
        a31 + b31 * scale,
        a32 + b32 * scale,
        a33 + b33 * scale
    );
}
