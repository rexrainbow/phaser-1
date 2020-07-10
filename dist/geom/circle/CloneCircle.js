import './CircleContains.js';
import { Circle } from './Circle.js';

function CloneCircle(source) {
    return new Circle(source.x, source.y, source.radius);
}

export { CloneCircle };
