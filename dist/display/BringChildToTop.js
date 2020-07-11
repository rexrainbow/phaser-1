import {DIRTY_CONST as DIRTY_CONST2} from "../gameobjects/DIRTY_CONST";
import {GetChildIndex as GetChildIndex2} from "./GetChildIndex";
export function BringChildToTop(parent, child) {
  const parentChildren = parent.children;
  const currentIndex = GetChildIndex2(parent, child);
  if (currentIndex !== -1 && currentIndex < parentChildren.length) {
    parentChildren.splice(currentIndex, 1);
    parentChildren.push(child);
    child.setDirty(DIRTY_CONST2.TRANSFORM);
  }
  return child;
}
