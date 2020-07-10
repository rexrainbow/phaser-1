import '../../math/vec2/Vec2.js';
import { GetRectanglePerimeter } from './GetRectanglePerimeter.js';
import { GetRectanglePoint } from './GetRectanglePoint.js';

function GetRectanglePoints(rectangle, step, quantity = 0, out = []) {
    if (!quantity) {
        quantity = GetRectanglePerimeter(rectangle) / step;
    }
    for (let i = 0; i < quantity; i++) {
        out.push(GetRectanglePoint(rectangle, i / quantity));
    }
    return out;
}

export { GetRectanglePoints };
