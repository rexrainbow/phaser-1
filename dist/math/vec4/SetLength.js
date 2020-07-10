import { Vec4 } from './Vec4.js';
import { Scale } from './Scale.js';
import './DivideScalar.js';
import './Length.js';
import { Normalize } from './Normalize.js';

function SetLength(a, length, out = new Vec4()) {
    Normalize(a, out);
    return Scale(out, length, out);
}

export { SetLength };
