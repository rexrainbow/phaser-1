/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {Between as Between2} from "../../math/Between";
import {RectangleContainsRectangle as RectangleContainsRectangle2} from "./RectangleContainsRectangle";
import {Vec2 as Vec22} from "../../math/vec2/Vec2";
export function GetRectangleRandomPointOutside(outer, inner, out = new Vec22()) {
  if (RectangleContainsRectangle2(outer, inner)) {
    switch (Between2(0, 3)) {
      case 0:
        out.x = outer.x + Math.random() * (inner.right - outer.x);
        out.y = outer.y + Math.random() * (inner.y - outer.y);
        break;
      case 1:
        out.x = inner.x + Math.random() * (outer.right - inner.x);
        out.y = inner.bottom + Math.random() * (outer.bottom - inner.bottom);
        break;
      case 2:
        out.x = outer.x + Math.random() * (inner.x - outer.x);
        out.y = inner.y + Math.random() * (outer.bottom - inner.y);
        break;
      case 3:
        out.x = inner.right + Math.random() * (outer.right - inner.right);
        out.y = outer.y + Math.random() * (inner.bottom - outer.y);
        break;
    }
  }
  return out;
}
