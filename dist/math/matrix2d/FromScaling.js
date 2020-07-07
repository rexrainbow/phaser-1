import { Matrix2D } from './Matrix2D.js';
import { Scale } from './Scale.js';

function FromScaling(scaleX, scaleY = scaleX) {
    const target = new Matrix2D();
    return Scale(target, scaleX, scaleY, target);
}

export { FromScaling };
