import {DepthFirstSearch as DepthFirstSearch2} from "./DepthFirstSearch";
export function FindChildrenByName(parent, searchString) {
  const children = DepthFirstSearch2(parent);
  const regex = RegExp(searchString);
  const results = [];
  children.forEach((child) => {
    if (regex.test(child.name)) {
      results.push(child);
    }
  });
  return results;
}
