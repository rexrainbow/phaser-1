import { Matrix2D } from './Matrix2D.js';
import { Translate } from './Translate.js';

function FromTranslation(x, y) {
    const target = new Matrix2D();
    return Translate(target, x, y, target);
}

export { FromTranslation };
