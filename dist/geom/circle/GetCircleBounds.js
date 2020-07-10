import '../rectangle/RectangleContains.js';
import { Rectangle } from '../rectangle/Rectangle.js';

function GetCircleBounds(circle, out = new Rectangle()) {
    return out.set(circle.left, circle.top, circle.diameter, circle.diameter);
}

export { GetCircleBounds };
