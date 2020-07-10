import '../line/Line.js';
import { GetTriangleEdges } from './GetTriangleEdges.js';
import { GetLineLength } from '../line/GetLineLength.js';

function GetTrianglePerimeter(triangle) {
    const [line1, line2, line3] = GetTriangleEdges(triangle);
    return (GetLineLength(line1) + GetLineLength(line2) + GetLineLength(line3));
}

export { GetTrianglePerimeter };
