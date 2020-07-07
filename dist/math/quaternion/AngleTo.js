import { Clamp } from '../Clamp.js';
import { Dot } from './Dot.js';

function AngleTo(a, b) {
    return 2 * Math.acos(Math.abs(Clamp(Dot(a, b), -1, 1)));
}

export { AngleTo };
