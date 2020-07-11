import {Geometry as Geometry2} from "../geometry/Geometry";
import {Mesh as Mesh2} from "../mesh/Mesh";
import {PlaneGeometry as PlaneGeometry2} from "../../geom3d/PlaneGeometry";
export class Plane extends Mesh2 {
  constructor(x = 0, y = 0, z = 0, width = 1, height = 1, widthSegments = 1, heightSegments = 1) {
    const data = PlaneGeometry2(null, 0, 0, 0, 0, 1, 2, 1, -1, width, height, 1, widthSegments, heightSegments);
    const geometry = new Geometry2(data);
    super(x, y, z, geometry);
  }
}
