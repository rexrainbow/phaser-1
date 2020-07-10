import { CircleContains } from './CircleContains.js';

function CircleContainsRect(circle, rect) {
    return (CircleContains(circle, rect.x, rect.y) &&
        CircleContains(circle, rect.right, rect.y) &&
        CircleContains(circle, rect.x, rect.bottom) &&
        CircleContains(circle, rect.right, rect.bottom));
}

export { CircleContainsRect };
