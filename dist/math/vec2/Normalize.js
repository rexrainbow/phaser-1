import { Vec2 } from './Vec2.js';
import { DivideScalar } from './DivideScalar.js';
import { Length } from './Length.js';

function Normalize(a, out = new Vec2()) {
    return DivideScalar(a, Length(a) || 1, out);
}

export { Normalize };
