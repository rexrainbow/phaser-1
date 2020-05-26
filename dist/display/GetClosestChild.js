import { DistanceBetweenPoints } from '../math/distance/DistanceBetweenPoints.js';

function GetClosestChild(parent, point) {
    const children = parent.children;
    let closest = null;
    let distance = 0;
    children.forEach(child => {
        const childDistance = DistanceBetweenPoints(point, child.transform.position);
        if (!closest || childDistance < distance) {
            closest = child;
            distance = childDistance;
        }
    });
    return closest;
}

export { GetClosestChild };
