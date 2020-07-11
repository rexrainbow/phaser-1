import {SetParent3D as SetParent3D2} from "./SetParent3D";
export function AddChild3D(parent, child) {
  parent.children.push(child);
  SetParent3D2(parent, child);
  return child;
}
