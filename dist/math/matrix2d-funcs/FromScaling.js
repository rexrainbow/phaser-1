import Scale from './Scale';
import Matrix2D from '../matrix2d/Matrix2D';
export default function FromScaling(scaleX, scaleY = scaleX) {
    return Scale(new Matrix2D(), scaleX, scaleY);
}
//# sourceMappingURL=FromScaling.js.map