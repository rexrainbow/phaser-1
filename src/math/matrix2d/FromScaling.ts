import { Matrix2D } from '../matrix2d/Matrix2D';
import { Scale } from './Scale';

export function FromScaling (scaleX: number, scaleY: number = scaleX): Matrix2D
{
    const target = new Matrix2D();

    return Scale(target, scaleX, scaleY, target);
}
