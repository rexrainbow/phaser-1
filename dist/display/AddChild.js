import {SetParent as SetParent2} from "./SetParent";
export function AddChild(parent, child) {
  parent.children.push(child);
  SetParent2(parent, child);
  child.transform.updateWorld();
  return child;
}
