/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {Ellipse as Ellipse2} from "./Ellipse";
export function CloneEllipse(source) {
  return new Ellipse2(source.x, source.y, source.width, source.height);
}
