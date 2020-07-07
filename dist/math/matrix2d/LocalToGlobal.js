import { Vec2 } from '../vec2/Vec2.js';

function LocalToGlobal(mat, x, y, out = new Vec2()) {
    const { a, b, c, d, tx, ty } = mat;
    return out.set((a * x) + (c * y) + tx, (b * x) + (d * y) + ty);
}

export { LocalToGlobal };
