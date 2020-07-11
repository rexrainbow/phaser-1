import {AddChildAt as AddChildAt2} from "./AddChildAt";
import {GetChildIndex as GetChildIndex2} from "./GetChildIndex";
import {MoveChildTo as MoveChildTo2} from "./MoveChildTo";
import {RemoveChild as RemoveChild2} from "./RemoveChild";
export function ReplaceChild(target, source) {
  const targetParent = target.parent;
  const sourceParent = source.parent;
  const targetIndex = GetChildIndex2(targetParent, target);
  if (targetParent === sourceParent) {
    MoveChildTo2(targetParent, source, targetIndex);
    RemoveChild2(targetParent, target);
  } else {
    RemoveChild2(targetParent, target);
    RemoveChild2(sourceParent, source);
    AddChildAt2(targetParent, targetIndex, source);
  }
  return target;
}
