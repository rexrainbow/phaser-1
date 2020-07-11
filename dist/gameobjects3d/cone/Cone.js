import {ConeGeometry as ConeGeometry2} from "../../geom3d/ConeGeometry";
import {Geometry as Geometry2} from "../geometry/Geometry";
import {Mesh as Mesh2} from "../mesh/Mesh";
export class Cone extends Mesh2 {
  constructor(x = 0, y = 0, z = 0, radius = 1, height = 1, radialSegments = 8, heightSegments = 1, openEnded = false, thetaStart = 0, thetaLength = Math.PI * 2) {
    const data = ConeGeometry2(radius, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength);
    const geometry = new Geometry2(data);
    super(x, y, z, geometry);
  }
}
