import '../../math/vec2/Vec2.js';
import '../line/Line.js';
import '../circle/CircleContains.js';
import './LineToCircle.js';
import { GetLineToCircle } from './GetLineToCircle.js';
import { GetTriangleEdges } from '../triangle/GetTriangleEdges.js';
import '../triangle/TriangleContains.js';
import { TriangleToCircle } from './TriangleToCircle.js';

function GetTriangleToCircle(triangle, circle, out = []) {
    if (TriangleToCircle(triangle, circle)) {
        const [lineA, lineB, lineC] = GetTriangleEdges(triangle);
        GetLineToCircle(lineA, circle, out);
        GetLineToCircle(lineB, circle, out);
        GetLineToCircle(lineC, circle, out);
    }
    return out;
}

export { GetTriangleToCircle };
