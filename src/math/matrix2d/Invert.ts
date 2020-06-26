import { IMatrix2D } from './IMatrix2D';
import { Matrix2D } from './Matrix2D';

//  Inverts the target Matrix and then returns it

export function Invert (target: IMatrix2D, out: Matrix2D = new Matrix2D()): Matrix2D
{
    const { a, b, c, d, tx, ty } = target;

    let determinant: number = a * d - b * c;

    if (determinant)
    {
        determinant = 1 / determinant;

        out.set(
            d * determinant,
            -b * determinant,
            -c * determinant,
            a * determinant,
            (c * ty - d * tx) * determinant,
            (b * tx - a * ty) * determinant
        );
    }

    return out;
}
