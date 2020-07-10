import { Vec2 } from '../../math/vec2/Vec2.js';

function GetEllipseCircumferencePoint(ellipse, angle, out = new Vec2()) {
    const halfWidth = ellipse.width / 2;
    const halfHeight = ellipse.height / 2;
    return out.set(ellipse.x + halfWidth * Math.cos(angle), ellipse.y + halfHeight * Math.sin(angle));
}

export { GetEllipseCircumferencePoint };
