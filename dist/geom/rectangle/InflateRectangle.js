import { CenterRectangleOn } from './CenterRectangleOn.js';
import { GetRectangleCenterX } from './GetRectangleCenterX.js';
import { GetRectangleCenterY } from './GetRectangleCenterY.js';

function InflateRectangle(rect, x, y) {
    const cx = GetRectangleCenterX(rect);
    const cy = GetRectangleCenterY(rect);
    rect.width = rect.width + (x * 2);
    rect.height = rect.height + (y * 2);
    return CenterRectangleOn(rect, cx, cy);
}

export { InflateRectangle };
