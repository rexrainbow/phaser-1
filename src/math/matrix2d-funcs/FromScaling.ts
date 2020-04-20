import { Scale } from './Scale';
import { Matrix2D } from '../matrix2d/Matrix2D';

export function FromScaling (scaleX: number, scaleY: number = scaleX): Matrix2D
{
    return Scale(new Matrix2D(), scaleX, scaleY);
}
