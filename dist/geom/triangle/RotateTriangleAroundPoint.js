import { RotateTriangleAround } from './RotateTriangleAround.js';

function RotateTriangleAroundPoint(triangle, point, angle) {
    return RotateTriangleAround(triangle, point.x, point.y, angle);
}

export { RotateTriangleAroundPoint };
