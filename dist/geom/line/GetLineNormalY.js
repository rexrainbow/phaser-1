import { MATH_CONST } from '../../math/const.js';
import { GetLineAngle } from './GetLineAngle.js';

function GetLineNormalY(line) {
    return Math.sin(GetLineAngle(line) - MATH_CONST.HALF_PI);
}

export { GetLineNormalY };
