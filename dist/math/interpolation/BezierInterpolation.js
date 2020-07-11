/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {Bernstein as Bernstein2} from "../Bernstein";
export function BezierInterpolation(v, k) {
  let b = 0;
  const n = v.length - 1;
  for (let i = 0; i <= n; i++) {
    b += Math.pow(1 - k, n - i) * Math.pow(k, i) * v[i] * Bernstein2(n, i);
  }
  return b;
}
