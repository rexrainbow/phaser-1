import { RectangleContains } from './RectangleContains.js';

function RectangleContainsPoint(rect, point) {
    return RectangleContains(rect, point.x, point.y);
}

export { RectangleContainsPoint };
