import { Vec3 } from './Vec3.js';
import { Scale } from './Scale.js';
import { Normalize } from './Normalize.js';

function SetLength(a, length, out = new Vec3()) {
    Normalize(a, out);
    return Scale(out, length, out);
}

export { SetLength };
