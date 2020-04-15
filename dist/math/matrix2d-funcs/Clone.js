import Matrix2D from '../matrix2d/Matrix2D';
//  Clones the src matrix to a new Matrix2D.
export default function Clone(src) {
    return new Matrix2D(src.a, src.b, src.c, src.d, src.tx, src.ty);
}
//# sourceMappingURL=Clone.js.map