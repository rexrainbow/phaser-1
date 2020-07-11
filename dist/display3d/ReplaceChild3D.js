import {AddChild3DAt as AddChild3DAt2} from "./AddChild3DAt";
import {GetChild3DIndex as GetChild3DIndex2} from "./GetChild3DIndex";
import {MoveChild3DTo as MoveChild3DTo2} from "./MoveChild3DTo";
import {RemoveChild3D as RemoveChild3D2} from "./RemoveChild3D";
export function ReplaceChild3D(target, source) {
  const targetParent = target.parent;
  const sourceParent = source.parent;
  const targetIndex = GetChild3DIndex2(targetParent, target);
  if (targetParent === sourceParent) {
    MoveChild3DTo2(targetParent, source, targetIndex);
    RemoveChild3D2(targetParent, target);
  } else {
    RemoveChild3D2(targetParent, target);
    RemoveChild3D2(sourceParent, source);
    AddChild3DAt2(targetParent, targetIndex, source);
  }
  return target;
}
