import { Vec2 } from '../../math/vec2/Vec2.js';
import { Between } from '../../math/Between.js';
import { RectangleContainsRectangle } from './RectangleContainsRectangle.js';

function GetRectangleRandomPointOutside(outer, inner, out = new Vec2()) {
    if (RectangleContainsRectangle(outer, inner)) {
        switch (Between(0, 3)) {
            case 0:
                out.x = outer.x + (Math.random() * (inner.right - outer.x));
                out.y = outer.y + (Math.random() * (inner.y - outer.y));
                break;
            case 1:
                out.x = inner.x + (Math.random() * (outer.right - inner.x));
                out.y = inner.bottom + (Math.random() * (outer.bottom - inner.bottom));
                break;
            case 2:
                out.x = outer.x + (Math.random() * (inner.x - outer.x));
                out.y = inner.y + (Math.random() * (outer.bottom - inner.y));
                break;
            case 3:
                out.x = inner.right + (Math.random() * (outer.right - inner.right));
                out.y = outer.y + (Math.random() * (inner.bottom - outer.y));
                break;
        }
    }
    return out;
}

export { GetRectangleRandomPointOutside };
