/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {Wrap as Wrap2} from "../Wrap";
export function WrapAngleDegrees(angle) {
  return Wrap2(angle, -180, 180);
}
