export function AddSkew(skewX, skewY, ...children) {
  children.forEach((child) => {
    child.skewX += skewX;
    child.skewY += skewY;
  });
  return children;
}
