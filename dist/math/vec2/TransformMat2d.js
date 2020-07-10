import { Vec2 } from './Vec2.js';

function TransformMat2d(v, m, out = new Vec2()) {
    const { a, b, c, d, tx, ty } = m;
    return out.set(a * v.x + c * v.y + tx, b * v.x + d * v.y + ty);
}

export { TransformMat2d };
