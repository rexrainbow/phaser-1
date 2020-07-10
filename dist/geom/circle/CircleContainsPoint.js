import { CircleContains } from './CircleContains.js';

function CircleContainsPoint(circle, point) {
    return CircleContains(circle, point.x, point.y);
}

export { CircleContainsPoint };
