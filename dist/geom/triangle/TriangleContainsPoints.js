import { Vec2 } from '../../math/vec2/Vec2.js';
import { TriangleContains } from './TriangleContains.js';

function TriangleContainsPoints(triangle, points, returnFirst = false, out = []) {
    let skip = false;
    points.forEach(point => {
        if (skip) {
            return;
        }
        const { x, y } = point;
        if (TriangleContains(triangle, x, y)) {
            out.push(new Vec2(x, y));
            if (returnFirst) {
                skip = true;
            }
        }
    });
    return out;
}

export { TriangleContainsPoints };
