import {AddChild as AddChild2} from "./AddChild";
export function AddChildren(parent, ...children) {
  children.forEach((child) => {
    AddChild2(parent, child);
  });
  return children;
}
