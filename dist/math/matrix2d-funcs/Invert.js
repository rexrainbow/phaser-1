import Matrix2D from '../matrix2d/Matrix2D';
//  Inverts the src Matrix and returns the result in a new Matrix, or null.
export default function Invert(src) {
    const { a, b, c, d, tx, ty } = src;
    let determinant = (a * d) - (b * c);
    if (!determinant) {
        return null;
    }
    determinant = 1 / determinant;
    return new Matrix2D(d * determinant, -b * determinant, -c * determinant, a * determinant, (c * ty - d * tx) * determinant, (b * tx - a * ty) * determinant);
}
//# sourceMappingURL=Invert.js.map