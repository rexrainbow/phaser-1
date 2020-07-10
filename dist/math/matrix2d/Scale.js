import { Matrix2D } from './Matrix2D.js';

function Scale(target, scaleX, scaleY, out = new Matrix2D()) {
    const { a, b, c, d, tx, ty } = target;
    return out.set(a * scaleX, b * scaleX, c * scaleY, d * scaleY, tx, ty);
}

export { Scale };
