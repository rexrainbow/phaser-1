import Matrix2D from '../matrix2d/Matrix2D';
export default function Scale(src, scaleX, scaleY) {
    return new Matrix2D(src.a * scaleX, src.b * scaleX, src.c * scaleY, src.d * scaleY);
}
//# sourceMappingURL=Scale.js.map