import { Mat2dScale } from './Mat2dScale';
import { Matrix2D } from './Matrix2D';

export function Mat2dFromScaling (scaleX: number, scaleY: number = scaleX): Matrix2D
{
    const target = new Matrix2D();

    return Mat2dScale(target, scaleX, scaleY, target);
}
