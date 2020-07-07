import { Vec2 } from './Vec2.js';
import { FromTransform } from './FromTransform.js';

function Transform(v, positionX, positionY, rotation, scaleX, scaleY, out = new Vec2()) {
    return FromTransform(v.x, v.y, positionX, positionY, rotation, scaleX, scaleY, out);
}

export { Transform };
