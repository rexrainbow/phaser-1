import {CylinderGeometry as CylinderGeometry2} from "./CylinderGeometry";
export function ConeGeometry(radius = 1, height = 1, radialSegments = 8, heightSegments = 1, openEnded = false, thetaStart = 0, thetaLength = Math.PI * 2) {
  return CylinderGeometry2(0, radius, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength);
}
