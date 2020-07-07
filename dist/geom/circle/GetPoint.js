import { Vec2 } from '../../math/vec2/Vec2.js';
import { MATH_CONST } from '../../math/const.js';
import '../../math/Clamp.js';
import { FromPercent } from '../../math/FromPercent.js';
import { CircumferencePoint } from './CircumferencePoint.js';

function GetPoint(circle, position, out = new Vec2()) {
    const angle = FromPercent(position, 0, MATH_CONST.PI2);
    return CircumferencePoint(circle, angle, out);
}

export { GetPoint };
