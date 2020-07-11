import {FromQuat, Matrix4} from "../mat4";
import {FromRotationMatrix as FromRotationMatrix2} from "./FromRotationMatrix";
const tempMat4 = new Matrix4();
export function FromQuaternion(e, q, order = e.order) {
  FromQuat(q, tempMat4);
  return FromRotationMatrix2(e, tempMat4, order);
}
