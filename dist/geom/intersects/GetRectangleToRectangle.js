import '../../math/vec2/Vec2.js';
import '../line/Line.js';
import { GetRectangleEdges } from '../rectangle/GetRectangleEdges.js';
import { RectangleToRectangle } from './RectangleToRectangle.js';
import './LineToLine.js';
import './LineToRectangle.js';
import { GetLineToRectangle } from './GetLineToRectangle.js';

function GetRectangleToRectangle(rectA, rectB, out = []) {
    if (RectangleToRectangle(rectA, rectB)) {
        const [lineA, lineB, lineC, lineD] = GetRectangleEdges(rectA);
        GetLineToRectangle(lineA, rectB, out);
        GetLineToRectangle(lineB, rectB, out);
        GetLineToRectangle(lineC, rectB, out);
        GetLineToRectangle(lineD, rectB, out);
    }
    return out;
}

export { GetRectangleToRectangle };
