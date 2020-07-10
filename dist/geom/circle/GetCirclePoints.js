import '../../math/vec2/Vec2.js';
import { MATH_CONST } from '../../math/const.js';
import '../../math/Clamp.js';
import { FromPercent } from '../../math/FromPercent.js';
import { GetCircleCircumference } from './GetCircleCircumference.js';
import { GetCircleCircumferencePoint } from './GetCircleCircumferencePoint.js';

function GetCirclePoints(circle, step, quantity = 0, out = []) {
    if (!quantity) {
        quantity = GetCircleCircumference(circle) / step;
    }
    for (let i = 0; i < quantity; i++) {
        const angle = FromPercent(i / quantity, 0, MATH_CONST.PI2);
        out.push(GetCircleCircumferencePoint(circle, angle));
    }
    return out;
}

export { GetCirclePoints };
