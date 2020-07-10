import { RotateLineAround } from './RotateLineAround.js';

function RotateLine(line, angle) {
    const x = (line.x1 + line.x2) / 2;
    const y = (line.y1 + line.y2) / 2;
    return RotateLineAround(line, x, y, angle);
}

export { RotateLine };
