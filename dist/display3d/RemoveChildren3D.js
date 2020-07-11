import {RemoveChild3D as RemoveChild3D2} from "./RemoveChild3D";
export function RemoveChildren3D(parent, ...children) {
  children.forEach((child) => {
    RemoveChild3D2(parent, child);
  });
  return children;
}
