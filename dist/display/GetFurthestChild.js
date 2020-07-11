import {GetVec2Distance as GetVec2Distance2} from "../math/vec2/GetVec2Distance";
export function GetFurthestChild(parent, point) {
  const children = parent.children;
  let furthest = null;
  let distance = 0;
  children.forEach((child) => {
    const childDistance = GetVec2Distance2(point, child.transform.position);
    if (!furthest || childDistance > distance) {
      furthest = child;
      distance = childDistance;
    }
  });
  return furthest;
}
