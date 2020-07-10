import '../rectangle/RectangleContains.js';
import { Rectangle } from '../rectangle/Rectangle.js';

function GetEllipseBounds(ellipse, out = new Rectangle()) {
    return out.set(ellipse.left, ellipse.top, ellipse.width, ellipse.height);
}

export { GetEllipseBounds };
