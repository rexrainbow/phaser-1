export function SetFrame(texture, key, ...children) {
  const frame = texture.getFrame(key);
  children.forEach((child) => {
    if (!child || frame === child.frame) {
      return;
    }
    child.frame = frame;
    child.hasTexture = true;
  });
  return children;
}
