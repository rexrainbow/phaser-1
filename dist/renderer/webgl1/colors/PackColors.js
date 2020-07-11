export function PackColors(sprite) {
  sprite.vertices.forEach((vertex) => {
    vertex.packColor();
  });
  return sprite;
}
