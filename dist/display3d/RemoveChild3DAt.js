export function RemoveChild3DAt(parent, index) {
  const children = parent.children;
  let child;
  if (index >= 0 && index < children.length) {
    const removed = children.splice(index, 1);
    if (removed[0]) {
      child = removed[0];
      child.parent = null;
    }
  }
  return child;
}
