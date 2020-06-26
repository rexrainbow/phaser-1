import { Matrix2D } from '../matrix2d/Matrix2D';
import { Rotate } from './Rotate';

export function FromRotation (angle: number): Matrix2D
{
    const target = new Matrix2D();

    return Rotate(target, angle, target);
}
