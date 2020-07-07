import '../../math/vec2/Vec2.js';
import '../line/Line.js';
import { GetEdges } from '../rectangle/GetEdges.js';
import '../circle/Contains.js';
import { CircleToRectangle } from './CircleToRectangle.js';
import './LineToCircle.js';
import { GetLineToCircle } from './GetLineToCircle.js';

function GetCircleToRectangle(circle, rect, out = []) {
    if (CircleToRectangle(circle, rect)) {
        const [line1, line2, line3, line4] = GetEdges(rect);
        GetLineToCircle(line1, circle, out);
        GetLineToCircle(line2, circle, out);
        GetLineToCircle(line3, circle, out);
        GetLineToCircle(line4, circle, out);
    }
    return out;
}

export { GetCircleToRectangle };
