import {DIRTY_CONST as DIRTY_CONST2} from "../gameobjects/DIRTY_CONST";
import {GetChildIndex as GetChildIndex2} from "./GetChildIndex";
export function MoveChildUp(parent, child) {
  const parentChildren = parent.children;
  const currentIndex = GetChildIndex2(parent, child);
  if (currentIndex !== -1 && currentIndex > 0) {
    const child2 = parentChildren[currentIndex + 1];
    const index2 = parentChildren.indexOf(child2);
    parentChildren[currentIndex] = child2;
    parentChildren[index2] = child;
    child.setDirty(DIRTY_CONST2.TRANSFORM);
    child2.setDirty(DIRTY_CONST2.TRANSFORM);
  }
  return child;
}
