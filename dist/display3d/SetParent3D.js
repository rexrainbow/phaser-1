import {DepthFirstSearch3D as DepthFirstSearch3D2} from "./DepthFirstSearch3D";
import {RemoveChild3D as RemoveChild3D2} from "./RemoveChild3D";
import {SetWorld3D as SetWorld3D2} from "./SetWorld3D";
export function SetParent3D(parent, ...children) {
  children.forEach((child) => {
    if (child.parent) {
      RemoveChild3D2(child.parent, child);
    }
    child.parent = parent;
  });
  const parentWorld = parent.world;
  if (parentWorld) {
    SetWorld3D2(parentWorld, ...DepthFirstSearch3D2(parent));
  }
  return children;
}
