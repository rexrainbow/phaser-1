import {DIRTY_CONST as DIRTY_CONST2} from "../gameobjects/DIRTY_CONST";
import {GetChild3DIndex as GetChild3DIndex2} from "./GetChild3DIndex";
export function MoveChild3DTo(parent, child, index) {
  const parentChildren = parent.children;
  const currentIndex = GetChild3DIndex2(parent, child);
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
