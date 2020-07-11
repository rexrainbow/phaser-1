import {RemoveChildrenBetween as RemoveChildrenBetween2} from "./RemoveChildrenBetween";
export function DestroyChildren(parent, beginIndex = 0, endIndex) {
  const removed = RemoveChildrenBetween2(parent, beginIndex, endIndex);
  removed.forEach((child) => {
    child.destroy();
  });
}
