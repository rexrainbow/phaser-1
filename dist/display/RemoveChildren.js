import {RemoveChild as RemoveChild2} from "./RemoveChild";
export function RemoveChildren(parent, ...children) {
  children.forEach((child) => {
    RemoveChild2(parent, child);
  });
  return children;
}
