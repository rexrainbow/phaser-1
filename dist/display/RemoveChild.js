import {GetChildIndex as GetChildIndex2} from "./GetChildIndex";
import {RemoveChildAt as RemoveChildAt2} from "./RemoveChildAt";
export function RemoveChild(parent, child) {
  const currentIndex = GetChildIndex2(parent, child);
  if (currentIndex > -1) {
    RemoveChildAt2(parent, currentIndex);
  }
  return child;
}
