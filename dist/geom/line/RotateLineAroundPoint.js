import { RotateLineAround } from './RotateLineAround.js';

function RotateLineAroundPoint(line, point, angle) {
    return RotateLineAround(line, point.x, point.y, angle);
}

export { RotateLineAroundPoint };
