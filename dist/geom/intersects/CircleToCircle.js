import '../../math/vec2/DistanceSquared.js';
import { Distance } from '../../math/vec2/Distance.js';

function CircleToCircle(circleA, circleB) {
    return (Distance(circleA, circleB) <= (circleA.radius + circleB.radius));
}

export { CircleToCircle };
