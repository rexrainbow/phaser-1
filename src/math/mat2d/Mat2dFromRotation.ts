import { Mat2dRotate } from './Mat2dRotate';
import { Matrix2D } from './Matrix2D';

export function Mat2dFromRotation (angle: number): Matrix2D
{
    const target = new Matrix2D();

    return Mat2dRotate(target, angle, target);
}
