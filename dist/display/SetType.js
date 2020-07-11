export function SetType(type, ...children) {
  children.forEach((child) => {
    child.type = type;
  });
  return children;
}
