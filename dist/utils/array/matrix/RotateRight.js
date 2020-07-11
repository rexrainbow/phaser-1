/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {RotateMatrix as RotateMatrix2} from "./RotateMatrix";
export function RotateRight(matrix) {
  return RotateMatrix2(matrix, -90);
}
