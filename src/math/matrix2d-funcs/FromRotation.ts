import { Rotate } from './Rotate';
import { Matrix2D } from '../matrix2d/Matrix2D';

export function FromRotation (angle: number): Matrix2D
{
    return Rotate(new Matrix2D(), angle);
}
