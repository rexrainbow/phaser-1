import { Vec3 } from './Vec3.js';

function SetFromCylindricalCoords(radius, theta, y, out = new Vec3()) {
    return out.set(radius * Math.sin(theta), y, radius * Math.cos(theta));
}

export { SetFromCylindricalCoords };
