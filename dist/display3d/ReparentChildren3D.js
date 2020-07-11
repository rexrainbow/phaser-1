import {RemoveChildren3DBetween as RemoveChildren3DBetween2} from "./RemoveChildren3DBetween";
import {SetParent3D as SetParent3D2} from "./SetParent3D";
export function ReparentChildren3D(parent, newParent, beginIndex = 0, endIndex) {
  const moved = RemoveChildren3DBetween2(parent, beginIndex, endIndex);
  SetParent3D2(newParent, ...moved);
  moved.forEach((child) => {
  });
  return moved;
}
