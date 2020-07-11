import {DepthFirstSearch as DepthFirstSearch2} from "./DepthFirstSearch";
import {RemoveChild as RemoveChild2} from "./RemoveChild";
import {SetWorld as SetWorld2} from "./SetWorld";
export function SetParent(parent, ...children) {
  children.forEach((child) => {
    if (child.parent) {
      RemoveChild2(child.parent, child);
    }
    child.parent = parent;
  });
  const parentWorld = parent.world;
  if (parentWorld) {
    SetWorld2(parentWorld, ...DepthFirstSearch2(parent));
  }
  return children;
}
