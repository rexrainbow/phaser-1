import { Vec3 } from './Vec3.js';
import { Scale } from './Scale.js';
import { Clamp } from '../Clamp.js';
import { DivideScalar } from './DivideScalar.js';
import { Length } from './Length.js';

function ClampLength(a, min, max, out = new Vec3()) {
    const length = Length(a);
    DivideScalar(a, length || 1, out);
    return Scale(out, Clamp(min, max, length), out);
}

export { ClampLength };
