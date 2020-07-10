import '../../math/vec2/Vec2.js';
import '../line/Line.js';
import './LineToLine.js';
import { GetTriangleEdges } from '../triangle/GetTriangleEdges.js';
import '../triangle/TriangleContains.js';
import '../triangle/TriangleContainsPoints.js';
import './TriangleToLine.js';
import { GetTriangleToLine } from './GetTriangleToLine.js';
import '../triangle/DecomposeTriangle.js';
import { TriangleToTriangle } from './TriangleToTriangle.js';

function GetTriangleToTriangle(triangleA, triangleB, out = []) {
    if (TriangleToTriangle(triangleA, triangleB)) {
        const [lineA, lineB, lineC] = GetTriangleEdges(triangleB);
        GetTriangleToLine(triangleA, lineA, out);
        GetTriangleToLine(triangleA, lineB, out);
        GetTriangleToLine(triangleA, lineC, out);
    }
    return out;
}

export { GetTriangleToTriangle };
