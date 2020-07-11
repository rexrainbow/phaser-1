import {Geometry as Geometry2} from "../geometry/Geometry";
import {Mesh as Mesh2} from "../mesh/Mesh";
import {SphereGeometry as SphereGeometry2} from "../../geom3d/SphereGeometry";
export class Sphere extends Mesh2 {
  constructor(x = 0, y = 0, z = 0, radius = 1, widthSegments = 3, heightSegments = 3, phiStart = 0, phiLength = Math.PI * 2, thetaStart = 0, thetaLength = Math.PI) {
    const data = SphereGeometry2(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength);
    const geometry = new Geometry2(data);
    super(x, y, z, geometry);
  }
}
