import {Vec3 as Vec32} from "./Vec3";
export function Vec3FromCylindricalCoords(radius, theta, y, out = new Vec32()) {
  return out.set(radius * Math.sin(theta), y, radius * Math.cos(theta));
}
