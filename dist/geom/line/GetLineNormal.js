import { Vec2 } from '../../math/vec2/Vec2.js';
import { MATH_CONST } from '../../math/const.js';
import { GetLineAngle } from './GetLineAngle.js';

function GetLineNormal(line, out = new Vec2()) {
    const a = GetLineAngle(line) - MATH_CONST.HALF_PI;
    out.x = Math.cos(a);
    out.y = Math.sin(a);
    return out;
}

export { GetLineNormal };
