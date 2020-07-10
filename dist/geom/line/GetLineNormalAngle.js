import { MATH_CONST } from '../../math/const.js';
import { Wrap } from '../../math/Wrap.js';
import { GetLineAngle } from './GetLineAngle.js';

function GetLineNormalAngle(line) {
    const angle = GetLineAngle(line) - MATH_CONST.HALF_PI;
    return Wrap(angle, -Math.PI, Math.PI);
}

export { GetLineNormalAngle };
