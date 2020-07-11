export function SetFrame(texture, key, ...children) {
  const frame = texture.getFrame(key);
  const {u0, u1, v0, v1, pivot} = frame;
  children.forEach((child) => {
    if (!child || frame === child.frame) {
      return;
    }
    child.frame = frame;
    if (pivot) {
      child.setOrigin(pivot.x, pivot.y);
    }
    child.frame.setExtent(child);
    child.hasTexture = true;
    const vertices = child.vertices;
    vertices[0].setUV(u0, v0);
    vertices[1].setUV(u0, v1);
    vertices[2].setUV(u1, v1);
    vertices[3].setUV(u1, v0);
  });
  return children;
}
