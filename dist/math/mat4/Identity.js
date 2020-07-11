import {Matrix4 as Matrix42} from "./Matrix4";
export function Identity(matrix = new Matrix42()) {
  return matrix.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
