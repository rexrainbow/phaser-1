import '../math/vec2/DistanceSquared.js';
import { Distance } from '../math/vec2/Distance.js';

function GetFurthestChild(parent, point) {
    const children = parent.children;
    let furthest = null;
    let distance = 0;
    children.forEach(child => {
        const childDistance = Distance(point, child.transform.position);
        if (!furthest || childDistance > distance) {
            furthest = child;
            distance = childDistance;
        }
    });
    return furthest;
}

export { GetFurthestChild };
