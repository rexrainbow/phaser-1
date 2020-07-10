import '../../math/vec2/Vec2.js';
import { MATH_CONST } from '../../math/const.js';
import '../../math/Clamp.js';
import { FromPercent } from '../../math/FromPercent.js';
import { GetEllipseCircumference } from './GetEllipseCircumference.js';
import { GetEllipseCircumferencePoint } from './GetEllipseCircumferencePoint.js';

function GetEllipsePoints(ellipse, step, quantity = 0, out = []) {
    if (!quantity) {
        quantity = GetEllipseCircumference(ellipse) / step;
    }
    for (let i = 0; i < quantity; i++) {
        const angle = FromPercent(i / quantity, 0, MATH_CONST.PI2);
        out.push(GetEllipseCircumferencePoint(ellipse, angle));
    }
    return out;
}

export { GetEllipsePoints };
