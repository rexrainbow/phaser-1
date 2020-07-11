export function GetLastChild(parent, property, value) {
  const children = parent.children;
  for (let i = children.length - 1; i >= 0; i--) {
    const child = children[i];
    const descriptor = Object.getOwnPropertyDescriptor(child, property);
    if (descriptor && (value === void 0 || value === descriptor.value)) {
      return child;
    }
  }
}
