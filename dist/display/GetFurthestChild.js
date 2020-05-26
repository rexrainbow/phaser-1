import { DistanceBetweenPoints } from '../math/distance/DistanceBetweenPoints.js';

function GetFurthestChild(parent, point) {
    const children = parent.children;
    let furthest = null;
    let distance = 0;
    children.forEach(child => {
        const childDistance = DistanceBetweenPoints(point, child.transform.position);
        if (!furthest || childDistance > distance) {
            furthest = child;
            distance = childDistance;
        }
    });
    return furthest;
}

export { GetFurthestChild };
