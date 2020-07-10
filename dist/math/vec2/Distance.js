import { DistanceSquared } from './DistanceSquared.js';

function Distance(a, b) {
    return Math.sqrt(DistanceSquared(a, b));
}

export { Distance };
