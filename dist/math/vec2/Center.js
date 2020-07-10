import { Vec2 } from './Vec2.js';
import { Add } from './Add.js';
import { Scale } from './Scale.js';

function Center(a, b, out = new Vec2()) {
    Add(a, b, out);
    return Scale(out, 0.5, out);
}

export { Center };
