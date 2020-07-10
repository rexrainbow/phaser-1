import './EllipseContains.js';
import { Ellipse } from './Ellipse.js';

function CloneEllipse(source) {
    return new Ellipse(source.x, source.y, source.width, source.height);
}

export { CloneEllipse };
