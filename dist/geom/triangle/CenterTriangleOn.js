import '../../math/vec2/Vec2.js';
import { GetTriangleCentroid } from './GetTriangleCentroid.js';
import { TranslateTriangle } from './TranslateTriangle.js';

function CenterTriangleOn(triangle, x, y, centerFunc = GetTriangleCentroid) {
    const center = centerFunc(triangle);
    const diffX = x - center.x;
    const diffY = y - center.y;
    return TranslateTriangle(triangle, diffX, diffY);
}

export { CenterTriangleOn };
