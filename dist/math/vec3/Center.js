import { Vec3 } from './Vec3.js';
import { Add } from './Add.js';
import { Scale } from './Scale.js';

function Center(a, b, out = new Vec3()) {
    Add(a, b, out);
    return Scale(out, 0.5, out);
}

export { Center };
