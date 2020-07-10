import { EllipseContains } from './EllipseContains.js';

function EllipseContainsPoint(ellipse, point) {
    return EllipseContains(ellipse, point.x, point.y);
}

export { EllipseContainsPoint };
