import {Line as Line2} from "../line/Line";
export function GetRectangleEdges(rectangle) {
  const {x, y, right, bottom} = rectangle;
  const line1 = new Line2(x, y, right, y);
  const line2 = new Line2(right, y, right, bottom);
  const line3 = new Line2(right, bottom, x, bottom);
  const line4 = new Line2(x, bottom, x, y);
  return [line1, line2, line3, line4];
}
