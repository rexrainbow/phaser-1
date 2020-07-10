import '../../math/vec2/Vec2.js';
import '../line/Line.js';
import '../circle/CircleContains.js';
import { LineToCircle } from './LineToCircle.js';
import { GetTriangleEdges } from '../triangle/GetTriangleEdges.js';
import { TriangleContains } from '../triangle/TriangleContains.js';

function TriangleToCircle(triangle, circle) {
    if (triangle.left > circle.right ||
        triangle.right < circle.left ||
        triangle.top > circle.bottom ||
        triangle.bottom < circle.top) {
        return false;
    }
    if (TriangleContains(triangle, circle.x, circle.y)) {
        return true;
    }
    const [line1, line2, line3] = GetTriangleEdges(triangle);
    return (LineToCircle(line1, circle) ||
        LineToCircle(line2, circle) ||
        LineToCircle(line3, circle));
}

export { TriangleToCircle };
