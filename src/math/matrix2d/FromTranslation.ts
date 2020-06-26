import { Matrix2D } from '../matrix2d/Matrix2D';
import { Translate } from './Translate';

export function FromTranslation (x: number, y: number): Matrix2D
{
    const target = new Matrix2D();

    return Translate(target, x, y, target);
}
