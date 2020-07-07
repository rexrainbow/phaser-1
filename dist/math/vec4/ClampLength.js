import { Clamp } from '../Clamp.js';
import { Vec4 } from './Vec4.js';
import { Scale } from './Scale.js';
import { DivideScalar } from './DivideScalar.js';
import { Length } from './Length.js';

function ClampLength(a, min, max, out = new Vec4()) {
    const length = Length(a);
    DivideScalar(a, length || 1, out);
    return Scale(out, Clamp(min, max, length), out);
}

export { ClampLength };
