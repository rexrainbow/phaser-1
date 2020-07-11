import {DIRTY_CONST as DIRTY_CONST2} from "../gameobjects/DIRTY_CONST";
import {GetChildIndex as GetChildIndex2} from "./GetChildIndex";
export function SendChildToBack(parent, child) {
  const parentChildren = parent.children;
  const currentIndex = GetChildIndex2(parent, child);
  if (currentIndex !== -1 && currentIndex > 0) {
    parentChildren.splice(currentIndex, 1);
    parentChildren.unshift(child);
    child.setDirty(DIRTY_CONST2.TRANSFORM);
  }
  return child;
}
