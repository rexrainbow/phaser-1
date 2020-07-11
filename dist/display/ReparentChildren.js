import {RemoveChildrenBetween as RemoveChildrenBetween2} from "./RemoveChildrenBetween";
import {SetParent as SetParent2} from "./SetParent";
export function ReparentChildren(parent, newParent, beginIndex = 0, endIndex) {
  const moved = RemoveChildrenBetween2(parent, beginIndex, endIndex);
  SetParent2(newParent, ...moved);
  moved.forEach((child) => {
    child.transform.updateWorld();
  });
  return moved;
}
