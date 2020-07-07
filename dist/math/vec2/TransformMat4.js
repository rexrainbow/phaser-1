import { Vec2 } from './Vec2.js';

function TransformMat4(v, m, out = new Vec2()) {
    const data = m.data;
    return out.set(data[0] * v.x + data[4] * v.y + data[12], data[1] * v.x + data[5] * v.y + data[13]);
}

export { TransformMat4 };
