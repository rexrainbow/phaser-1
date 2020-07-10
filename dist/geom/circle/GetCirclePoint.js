import { Vec2 } from '../../math/vec2/Vec2.js';
import { MATH_CONST } from '../../math/const.js';
import '../../math/Clamp.js';
import { FromPercent } from '../../math/FromPercent.js';
import { GetCircleCircumferencePoint } from './GetCircleCircumferencePoint.js';

function GetCirclePoint(circle, position, out = new Vec2()) {
    const angle = FromPercent(position, 0, MATH_CONST.PI2);
    return GetCircleCircumferencePoint(circle, angle, out);
}

export { GetCirclePoint };
