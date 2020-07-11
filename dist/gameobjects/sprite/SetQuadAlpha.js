import {DIRTY_CONST as DIRTY_CONST2} from "../DIRTY_CONST";
export function SetQuadAlpha(topLeft, topRight, bottomLeft, bottomRight, ...children) {
  children.forEach((child) => {
    const vertices = child.vertices;
    vertices[0].setAlpha(topLeft);
    vertices[1].setAlpha(topRight);
    vertices[2].setAlpha(bottomLeft);
    vertices[3].setAlpha(bottomRight);
    child.setDirty(DIRTY_CONST2.COLORS);
  });
  return children;
}
