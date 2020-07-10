import './TriangleContains.js';
import { Triangle } from './Triangle.js';

function CloneTriangle(source) {
    const { x1, y1, x2, y2, x3, y3 } = source;
    return new Triangle(x1, y1, x2, y2, x3, y3);
}

export { CloneTriangle };
