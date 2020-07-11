export function GetFirstChild3D(parent, property, value) {
  const children = parent.children;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    const descriptor = Object.getOwnPropertyDescriptor(child, property);
    if (descriptor && (value === void 0 || value === descriptor.value)) {
      return child;
    }
  }
}
