import {DepthFirstSearch3D as DepthFirstSearch3D2} from "./DepthFirstSearch3D";
export function GetAllChildren3D(parent, property, value) {
  const children = DepthFirstSearch3D2(parent);
  if (!property) {
    return children;
  }
  const results = [];
  children.forEach((child) => {
    const descriptor = Object.getOwnPropertyDescriptor(child, property);
    if (descriptor && (value === void 0 || value === descriptor.value)) {
      results.push(child);
    }
  });
  return results;
}
