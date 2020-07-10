import '../../math/vec2/Vec2.js';
import { GetTriangleInCenter } from './GetTriangleInCenter.js';
import { RotateTriangleAround } from './RotateTriangleAround.js';

function RotateTriangle(triangle, angle) {
    const point = GetTriangleInCenter(triangle);
    return RotateTriangleAround(triangle, point.x, point.y, angle);
}

export { RotateTriangle };
