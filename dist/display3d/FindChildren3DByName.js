import {DepthFirstSearch3D as DepthFirstSearch3D2} from "./DepthFirstSearch3D";
export function FindChildren3DByName(parent, searchString) {
  const children = DepthFirstSearch3D2(parent);
  const regex = RegExp(searchString);
  const results = [];
  children.forEach((child) => {
    if (regex.test(child.name)) {
      results.push(child);
    }
  });
  return results;
}
