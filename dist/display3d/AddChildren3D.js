import {AddChild3D as AddChild3D2} from "./AddChild3D";
export function AddChildren3D(parent, ...children) {
  children.forEach((child) => {
    AddChild3D2(parent, child);
  });
  return children;
}
