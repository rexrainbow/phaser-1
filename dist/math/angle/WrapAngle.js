/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {Wrap as Wrap2} from "../Wrap";
export function WrapAngle(angle) {
  return Wrap2(angle, -Math.PI, Math.PI);
}
