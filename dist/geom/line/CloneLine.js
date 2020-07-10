import { Line } from './Line.js';

function CloneLine(source) {
    return new Line(source.x1, source.y1, source.x2, source.y2);
}

export { CloneLine };
