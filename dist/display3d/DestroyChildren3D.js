import {RemoveChildren3DBetween as RemoveChildren3DBetween2} from "./RemoveChildren3DBetween";
export function DestroyChildren3D(parent, beginIndex = 0, endIndex) {
  const removed = RemoveChildren3DBetween2(parent, beginIndex, endIndex);
  removed.forEach((child) => {
    child.destroy();
  });
}
