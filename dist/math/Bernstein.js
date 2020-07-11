/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {Factorial as Factorial2} from "./Factorial";
export function Bernstein(n, i) {
  return Factorial2(n) / Factorial2(i) / Factorial2(n - i);
}
