import {DIRTY_CONST as DIRTY_CONST2} from "../gameobjects/DIRTY_CONST";
export function HasDirtyChildren(parent) {
  if (parent.node.isDirty(DIRTY_CONST2.CHILD_CACHE)) {
    return true;
  }
  const stack = [parent];
  while (stack.length > 0) {
    const entry = stack.pop();
    if (entry.node.isDirty(DIRTY_CONST2.TRANSFORM)) {
      return true;
    }
    const numChildren = entry.children.length;
    if (numChildren > 0) {
      for (let i = 0; i < numChildren; i++) {
        stack.push(entry.children[i]);
      }
    }
  }
  stack.length = 0;
  return false;
}
