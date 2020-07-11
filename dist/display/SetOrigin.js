export function SetOrigin(originX, originY, ...children) {
  children.forEach((child) => {
    child.setOrigin(originX, originY);
  });
  return children;
}
