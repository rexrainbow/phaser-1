import '../../math/const.js';
import '../../math/Wrap.js';
import { GetLineAngle } from './GetLineAngle.js';
import { GetLineNormalAngle } from './GetLineNormalAngle.js';

function GetLineReflectAngle(lineA, lineB) {
    return (2 * GetLineNormalAngle(lineB) - Math.PI - GetLineAngle(lineA));
}

export { GetLineReflectAngle };
