import {Invert as Invert2} from "../mat4/Invert";
import {Matrix4 as Matrix42} from "../mat4/Matrix4";
import {Multiply as Multiply2} from "../mat4/Multiply";
import {Vec3 as Vec32} from "./Vec3";
import {Vec3Scale as Vec3Scale2} from "./Vec3Scale";
import {Vec3TransformMat4 as Vec3TransformMat42} from "./Vec3TransformMat4";
const matrix = new Matrix42();
const screenSource = new Vec32();
export function Vec3Unproject(v, viewportWidth, viewportHeight, world, view, projection, out = new Vec32()) {
  Multiply2(world, view, matrix);
  Multiply2(matrix, projection, matrix);
  Invert2(matrix, matrix);
  const {x, y, z} = v;
  screenSource.set(x / viewportWidth * 2 - 1, -(y / viewportHeight * 2 - 1), 2 * z - 1);
  Vec3TransformMat42(screenSource, matrix, out);
  const data = matrix.data;
  const num = screenSource.x * data[3] + screenSource.y * data[7] + screenSource.z * data[11] + data[15];
  return Vec3Scale2(out, 1 / num, out);
}
