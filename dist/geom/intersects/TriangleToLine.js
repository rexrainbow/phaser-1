import '../line/Line.js';
import { LineToLine } from './LineToLine.js';
import { GetTriangleEdges } from '../triangle/GetTriangleEdges.js';
import { TriangleContains } from '../triangle/TriangleContains.js';

function TriangleToLine(triangle, line) {
    const { x1, y1, x2, y2 } = line;
    if (TriangleContains(triangle, x1, y1) || TriangleContains(triangle, x2, y2)) {
        return true;
    }
    const [line1, line2, line3] = GetTriangleEdges(triangle);
    return (LineToLine(line1, line) ||
        LineToLine(line2, line) ||
        LineToLine(line3, line));
}

export { TriangleToLine };
