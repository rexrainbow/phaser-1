export function CountMatchingChildren3D(parent, property, value) {
  const children = parent.children;
  let total = 0;
  children.forEach((child) => {
    const descriptor = Object.getOwnPropertyDescriptor(child, property);
    if (descriptor && (value === void 0 || value === descriptor.value)) {
      total++;
    }
  });
  return total;
}
