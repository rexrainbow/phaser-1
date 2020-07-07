import { Vec4 } from './Vec4.js';
import { DivideScalar } from './DivideScalar.js';
import { Length } from './Length.js';

function Normalize(a, out = new Vec4()) {
    return DivideScalar(a, Length(a) || 1, out);
}

export { Normalize };
