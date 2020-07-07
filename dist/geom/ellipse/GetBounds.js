import '../rectangle/Contains.js';
import { Rectangle } from '../rectangle/Rectangle.js';

function GetBounds(ellipse, out = new Rectangle()) {
    return out.set(ellipse.left, ellipse.top, ellipse.width, ellipse.height);
}

export { GetBounds };
