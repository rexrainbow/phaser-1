import { Matrix2D } from './Matrix2D.js';
import { Rotate } from './Rotate.js';

function FromRotation(angle) {
    const target = new Matrix2D();
    return Rotate(target, angle, target);
}

export { FromRotation };
