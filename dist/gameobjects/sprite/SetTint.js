export function SetTint(tint, ...children) {
  children.forEach((child) => {
    child.tint = tint;
  });
  return children;
}
