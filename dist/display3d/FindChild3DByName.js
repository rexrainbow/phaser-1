import {DepthFirstSearch3D as DepthFirstSearch3D2} from "./DepthFirstSearch3D";
export function FindChild3DByName(parent, searchString) {
  const children = DepthFirstSearch3D2(parent);
  const regex = RegExp(searchString);
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (regex.test(child.name)) {
      return child;
    }
  }
}
