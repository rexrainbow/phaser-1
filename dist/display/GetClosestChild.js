import '../math/vec2/DistanceSquared.js';
import { Distance } from '../math/vec2/Distance.js';

function GetClosestChild(parent, point) {
    const children = parent.children;
    let closest = null;
    let distance = 0;
    children.forEach(child => {
        const childDistance = Distance(point, child.transform.position);
        if (!closest || childDistance < distance) {
            closest = child;
            distance = childDistance;
        }
    });
    return closest;
}

export { GetClosestChild };
