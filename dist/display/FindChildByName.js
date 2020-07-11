import {DepthFirstSearch as DepthFirstSearch2} from "./DepthFirstSearch";
export function FindChildByName(parent, searchString) {
  const children = DepthFirstSearch2(parent);
  const regex = RegExp(searchString);
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (regex.test(child.name)) {
      return child;
    }
  }
}
