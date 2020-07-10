import { Vec2 } from '../../math/vec2/Vec2.js';
import { GetRectangleCenterX } from './GetRectangleCenterX.js';
import { GetRectangleCenterY } from './GetRectangleCenterY.js';

function GetRectangleCenter(rect, out = new Vec2()) {
    return out.set(GetRectangleCenterX(rect), GetRectangleCenterY(rect));
}

export { GetRectangleCenter };
