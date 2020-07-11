import {CreateVertexSet as CreateVertexSet2} from "../gameobjects3d/geometry/CreateVertexSet";
import {PlaneGeometry as PlaneGeometry2} from "./PlaneGeometry";
export function BoxGeometry(x = 0, y = 0, z = 0, width = 1, height = 1, depth = 1, widthSegments = 1, heightSegments = 1, depthSegments = 1) {
  const data = CreateVertexSet2();
  PlaneGeometry2(data, x, y, z, 2, 1, 0, -1, -1, depth, height, width, depthSegments, heightSegments);
  PlaneGeometry2(data, x, y, z, 2, 1, 0, 1, -1, depth, height, -width, depthSegments, heightSegments);
  PlaneGeometry2(data, x, y, z, 0, 2, 1, 1, 1, width, depth, height, widthSegments, depthSegments);
  PlaneGeometry2(data, x, y, z, 0, 2, 1, 1, -1, width, depth, -height, widthSegments, depthSegments);
  PlaneGeometry2(data, x, y, z, 0, 1, 2, 1, -1, width, height, depth, widthSegments, heightSegments);
  PlaneGeometry2(data, x, y, z, 0, 1, 2, -1, -1, width, height, -depth, widthSegments, heightSegments);
  return data;
}
