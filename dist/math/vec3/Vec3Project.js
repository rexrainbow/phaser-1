import {Matrix4 as Matrix42} from "../mat4/Matrix4";
import {Multiply as Multiply2} from "../mat4/Multiply";
import {Vec3 as Vec32} from "./Vec3";
import {Vec3TransformMat4 as Vec3TransformMat42} from "./Vec3TransformMat4";
const tempMatrix1 = new Matrix42();
const tempMatrix2 = new Matrix42();
export function Vec3Project(v, world, transform, viewport, out = new Vec32()) {
  const {x, y, width, height} = viewport;
  tempMatrix1.set(width / 2, 0, 0, 0, 0, -height / 2, 0, 0, 0, 0, 0.5, 0, x + width / 2, height / 2 + y, 0.5, 1);
  Multiply2(world, transform, tempMatrix2);
  Multiply2(tempMatrix2, tempMatrix1, tempMatrix2);
  return Vec3TransformMat42(v, tempMatrix2, out);
}
