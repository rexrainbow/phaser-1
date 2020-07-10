import '../rectangle/RectangleContains.js';
import '../../math/vec2/Vec2.js';
import '../rectangle/DecomposeRectangle.js';
import '../line/Line.js';
import '../rectangle/GetRectangleEdges.js';
import './LineToLine.js';
import './LineToRectangle.js';
import { GetLineToRectangle } from './GetLineToRectangle.js';
import { GetTriangleEdges } from '../triangle/GetTriangleEdges.js';
import '../triangle/TriangleContains.js';
import '../triangle/TriangleContainsPoints.js';
import { RectangleToTriangle } from './RectangleToTriangle.js';

function GetRectangleToTriangle(rect, triangle, out = []) {
    if (RectangleToTriangle(rect, triangle)) {
        const [lineA, lineB, lineC] = GetTriangleEdges(triangle);
        GetLineToRectangle(lineA, rect, out);
        GetLineToRectangle(lineB, rect, out);
        GetLineToRectangle(lineC, rect, out);
    }
    return out;
}

export { GetRectangleToTriangle };
