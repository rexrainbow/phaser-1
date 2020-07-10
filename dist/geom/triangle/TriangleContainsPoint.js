import { TriangleContains } from './TriangleContains.js';

function TriangleContainsPoint(triangle, point) {
    return TriangleContains(triangle, point.x, point.y);
}

export { TriangleContainsPoint };
