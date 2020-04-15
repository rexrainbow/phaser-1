import IMatrix2D from './IMatrix2D';

//  Inverts the target Matrix and then returns it

export default function Invert (target: IMatrix2D): IMatrix2D
{
    const { a, b, c, d, tx, ty } = target;

    let determinant: number = a * d - b * c;

    if (determinant)
    {
        determinant = 1 / determinant;
  
        target.set(
            d * determinant,
            -b * determinant,
            -c * determinant,
            a * determinant,
            (c * ty - d * tx) * determinant,
            (b * tx - a * ty) * determinant
        );
    }

    return target;
}
