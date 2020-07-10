import { EllipseContains } from './EllipseContains.js';

function EllipseContainsRect(ellipse, rect) {
    return (EllipseContains(ellipse, rect.x, rect.y) &&
        EllipseContains(ellipse, rect.right, rect.y) &&
        EllipseContains(ellipse, rect.x, rect.bottom) &&
        EllipseContains(ellipse, rect.right, rect.bottom));
}

export { EllipseContainsRect };
