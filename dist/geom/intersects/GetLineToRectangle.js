import { Vec2 } from '../../math/vec2/Vec2.js';
import '../line/Line.js';
import { GetRectangleEdges } from '../rectangle/GetRectangleEdges.js';
import { LineToLine } from './LineToLine.js';
import { LineToRectangle } from './LineToRectangle.js';

function GetLineToRectangle(line, rect, out = []) {
    if (LineToRectangle(line, rect)) {
        const [lineA, lineB, lineC, lineD] = GetRectangleEdges(rect);
        const points = [new Vec2(), new Vec2(), new Vec2(), new Vec2()];
        const results = [
            LineToLine(lineA, line, points[0]),
            LineToLine(lineB, line, points[1]),
            LineToLine(lineC, line, points[2]),
            LineToLine(lineD, line, points[3])
        ];
        for (let i = 0; i < results.length; i++) {
            if (results[i]) {
                out.push(points[i]);
            }
        }
    }
    return out;
}

export { GetLineToRectangle };
