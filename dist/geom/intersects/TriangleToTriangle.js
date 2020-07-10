import '../../math/vec2/Vec2.js';
import '../line/Line.js';
import { LineToLine } from './LineToLine.js';
import { GetTriangleEdges } from '../triangle/GetTriangleEdges.js';
import '../triangle/TriangleContains.js';
import { TriangleContainsPoints } from '../triangle/TriangleContainsPoints.js';
import { DecomposeTriangle } from '../triangle/DecomposeTriangle.js';

function TriangleToTriangle(triangleA, triangleB) {
    if (triangleA.left > triangleB.right ||
        triangleA.right < triangleB.left ||
        triangleA.top > triangleB.bottom ||
        triangleA.bottom < triangleB.top) {
        return false;
    }
    const [lineAA, lineAB, lineAC] = GetTriangleEdges(triangleA);
    const [lineBA, lineBB, lineBC] = GetTriangleEdges(triangleB);
    if (LineToLine(lineAA, lineBA) ||
        LineToLine(lineAA, lineBB) ||
        LineToLine(lineAA, lineBC) ||
        LineToLine(lineAB, lineBA) ||
        LineToLine(lineAB, lineBB) ||
        LineToLine(lineAB, lineBC) ||
        LineToLine(lineAC, lineBA) ||
        LineToLine(lineAC, lineBB) ||
        LineToLine(lineAC, lineBC)) {
        return true;
    }
    const withinA = TriangleContainsPoints(triangleB, DecomposeTriangle(triangleA), true);
    if (withinA.length > 0) {
        return true;
    }
    const withinB = TriangleContainsPoints(triangleA, DecomposeTriangle(triangleB), true);
    return (withinB.length > 0);
}

export { TriangleToTriangle };
