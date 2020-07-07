import { Dot } from './Dot.js';

function AreClose(a, b) {
    return (Dot(a, b) >= 0);
}

export { AreClose };
