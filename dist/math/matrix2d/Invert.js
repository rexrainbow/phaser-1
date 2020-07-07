import { Matrix2D } from './Matrix2D.js';

function Invert(target, out = new Matrix2D()) {
    const { a, b, c, d, tx, ty } = target;
    let determinant = a * d - b * c;
    if (determinant) {
        determinant = 1 / determinant;
        out.set(d * determinant, -b * determinant, -c * determinant, a * determinant, (c * ty - d * tx) * determinant, (b * tx - a * ty) * determinant);
    }
    return out;
}

export { Invert };
