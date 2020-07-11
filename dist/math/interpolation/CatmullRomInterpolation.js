/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {CatmullRom as CatmullRom2} from "../CatmullRom";
export function CatmullRomInterpolation(v, k) {
  const m = v.length - 1;
  let f = m * k;
  let i = Math.floor(f);
  if (v[0] === v[m]) {
    if (k < 0) {
      i = Math.floor(f = m * (1 + k));
    }
    return CatmullRom2(f - i, v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m]);
  } else {
    if (k < 0) {
      return v[0] - (CatmullRom2(-f, v[0], v[0], v[1], v[1]) - v[0]);
    }
    if (k > 1) {
      return v[m] - (CatmullRom2(f - m, v[m], v[m], v[m - 1], v[m - 1]) - v[m]);
    }
    return CatmullRom2(f - i, v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2]);
  }
}
