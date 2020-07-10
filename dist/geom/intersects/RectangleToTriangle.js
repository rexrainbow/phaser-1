import { RectangleContains } from '../rectangle/RectangleContains.js';
import '../../math/vec2/Vec2.js';
import { DecomposeRectangle } from '../rectangle/DecomposeRectangle.js';
import '../line/Line.js';
import { GetRectangleEdges } from '../rectangle/GetRectangleEdges.js';
import { LineToLine } from './LineToLine.js';
import { GetTriangleEdges } from '../triangle/GetTriangleEdges.js';
import '../triangle/TriangleContains.js';
import { TriangleContainsPoints } from '../triangle/TriangleContainsPoints.js';

function RectangleToTriangle(rect, triangle) {
    if (triangle.left > rect.right ||
        triangle.right < rect.x ||
        triangle.top > rect.bottom ||
        triangle.bottom < rect.y) {
        return false;
    }
    const [triA, triB, triC] = GetTriangleEdges(triangle);
    if (RectangleContains(rect, triA.x1, triA.y1) || RectangleContains(rect, triA.x2, triA.y2)) {
        return true;
    }
    if (RectangleContains(rect, triB.x1, triB.y1) || RectangleContains(rect, triB.x2, triB.y2)) {
        return true;
    }
    if (RectangleContains(rect, triC.x1, triC.y1) || RectangleContains(rect, triC.x2, triC.y2)) {
        return true;
    }
    const [rectA, rectB, rectC, rectD] = GetRectangleEdges(rect);
    if (LineToLine(triA, rectA) || LineToLine(triA, rectB) || LineToLine(triA, rectC) || LineToLine(triA, rectD)) {
        return true;
    }
    if (LineToLine(triB, rectA) || LineToLine(triB, rectB) || LineToLine(triB, rectC) || LineToLine(triB, rectD)) {
        return true;
    }
    if (LineToLine(triC, rectA) || LineToLine(triC, rectB) || LineToLine(triC, rectC) || LineToLine(triC, rectD)) {
        return true;
    }
    const within = TriangleContainsPoints(triangle, DecomposeRectangle(rect), true);
    return (within.length > 0);
}

export { RectangleToTriangle };
