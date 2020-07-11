import {DIRTY_CONST as DIRTY_CONST2} from "../gameobjects/DIRTY_CONST";
export function ShuffleChildren(parent) {
  const children = parent.children;
  for (let i = children.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = children[i];
    children[i] = children[j];
    children[j] = temp;
    temp.setDirty(DIRTY_CONST2.TRANSFORM);
  }
  return children;
}
