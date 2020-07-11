import {SetParent3D as SetParent3D2} from "./SetParent3D";
export function AddChild3DAt(parent, index, child) {
  const children = parent.children;
  if (index >= 0 && index <= children.length) {
    SetParent3D2(parent, child);
    children.splice(index, 0, child);
  }
  return child;
}
