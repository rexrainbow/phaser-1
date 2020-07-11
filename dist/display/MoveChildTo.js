import {DIRTY_CONST as DIRTY_CONST2} from "../gameobjects/DIRTY_CONST";
import {GetChildIndex as GetChildIndex2} from "./GetChildIndex";
export function MoveChildTo(parent, child, index) {
  const parentChildren = parent.children;
  const currentIndex = GetChildIndex2(parent, child);
  if (currentIndex === -1 || index < 0 || index >= parentChildren.length) {
    throw new Error("Index out of bounds");
  }
  if (currentIndex !== index) {
    parentChildren.splice(currentIndex, 1);
    parentChildren.splice(index, 0, child);
    child.setDirty(DIRTY_CONST2.TRANSFORM);
  }
  return child;
}
