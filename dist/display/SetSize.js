export function SetSize(width, height, ...children) {
  children.forEach((child) => {
    child.setSize(width, height);
  });
  return children;
}
