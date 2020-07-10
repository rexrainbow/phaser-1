import { MATH_CONST } from '../../math/const.js';
import { GetLineAngle } from './GetLineAngle.js';

function GetLineNormalX(line) {
    return Math.cos(GetLineAngle(line) - MATH_CONST.HALF_PI);
}

export { GetLineNormalX };
