import {GetChild3DIndex as GetChild3DIndex2} from "./GetChild3DIndex";
import {RemoveChild3DAt as RemoveChild3DAt2} from "./RemoveChild3DAt";
export function RemoveChild3D(parent, child) {
  const currentIndex = GetChild3DIndex2(parent, child);
  if (currentIndex > -1) {
    RemoveChild3DAt2(parent, currentIndex);
  }
  return child;
}
