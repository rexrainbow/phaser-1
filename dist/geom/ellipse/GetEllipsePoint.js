import { Vec2 } from '../../math/vec2/Vec2.js';
import { MATH_CONST } from '../../math/const.js';
import '../../math/Clamp.js';
import { FromPercent } from '../../math/FromPercent.js';
import { GetEllipseCircumferencePoint } from './GetEllipseCircumferencePoint.js';

function GetEllipsePoint(ellipse, position, out = new Vec2()) {
    const angle = FromPercent(position, 0, MATH_CONST.PI2);
    return GetEllipseCircumferencePoint(ellipse, angle, out);
}

export { GetEllipsePoint };
