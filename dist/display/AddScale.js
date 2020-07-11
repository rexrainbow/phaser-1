export function AddScale(scaleX, scaleY, ...children) {
  children.forEach((child) => {
    child.scaleX += scaleX;
    child.scaleY += scaleY;
  });
  return children;
}
