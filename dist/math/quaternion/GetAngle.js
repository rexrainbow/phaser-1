import { Dot } from './Dot.js';

function GetAngle(a, b) {
    const dot = Dot(a, b);
    return Math.acos(2 * dot * dot - 1);
}

export { GetAngle };
