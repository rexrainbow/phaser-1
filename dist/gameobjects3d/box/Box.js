import {BoxGeometry as BoxGeometry2} from "../../geom3d/BoxGeometry";
import {Geometry as Geometry2} from "../geometry/Geometry";
import {Mesh as Mesh2} from "../mesh/Mesh";
export class Box extends Mesh2 {
  constructor(x = 0, y = 0, z = 0, width = 1, height = 1, depth = 1, widthSegments = 1, heightSegments = 1, depthSegments = 1) {
    const data = BoxGeometry2(0, 0, 0, width, height, depth, widthSegments, heightSegments, depthSegments);
    const geometry = new Geometry2(data);
    super(x, y, z, geometry);
  }
}
