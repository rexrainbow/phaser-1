import '../math/vec2/DistanceSquared.js';
import { Distance } from '../math/vec2/Distance.js';

function MoveToPosition(x, y, duration, ...children) {
    children.forEach(child => {
        const px = child.x;
        const py = child.y;
        const speed = Distance({ x: px, y: py }, { x, y }) / (duration / 1000);
        const world = child.world;
    });
    return children;
}

export { MoveToPosition };
