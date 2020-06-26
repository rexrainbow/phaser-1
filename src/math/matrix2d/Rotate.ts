import { IMatrix2D } from './IMatrix2D';
import { Matrix2D } from './Matrix2D';

//  Rotates the target Matrix by the angle (in radians), then returns the target Matrix.

export function Rotate (target: IMatrix2D, angle: number, out: Matrix2D = new Matrix2D()): Matrix2D
{
    const { a, b, c, d, tx, ty } = target;

    const sin = Math.sin(angle);
    const cos = Math.cos(angle);

    return out.set(
        (a * cos) + (c * sin),
        (b * cos) + (d * sin),
        (a * -sin) + (c * cos),
        (b * -sin) + (d * cos),
        tx,
        ty
    );
}
