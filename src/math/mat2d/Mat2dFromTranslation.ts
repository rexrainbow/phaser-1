import { Mat2dTranslate } from './Mat2dTranslate';
import { Matrix2D } from './Matrix2D';

export function Mat2dFromTranslation (x: number, y: number): Matrix2D
{
    const target = new Matrix2D();

    return Mat2dTranslate(target, x, y, target);
}
