/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {CheckMatrix as CheckMatrix2} from "./CheckMatrix";
import {TransposeMatrix as TransposeMatrix2} from "./TransposeMatrix";
export function RotateMatrix(matrix, direction = 90) {
  if (!CheckMatrix2(matrix)) {
    return matrix;
  }
  if (typeof direction !== "string") {
    direction = (direction % 360 + 360) % 360;
  }
  if (direction === 90 || direction === -270 || direction === "rotateLeft") {
    matrix = TransposeMatrix2(matrix);
    matrix.reverse();
  } else if (direction === -90 || direction === 270 || direction === "rotateRight") {
    matrix.reverse();
    matrix = TransposeMatrix2(matrix);
  } else if (Math.abs(direction) === 180 || direction === "rotate180") {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i].reverse();
    }
    matrix.reverse();
  }
  return matrix;
}
