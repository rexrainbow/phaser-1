import '../math/vec3/Vec3.js';
import '../math/vec2/Vec2.js';
import '../math/vec3/Normalize.js';
import '../gameobjects3d/geometry/CreateVertexSet.js';
import { CylinderGeometry } from './CylinderGeometry.js';

function ConeGeometry(radius = 1, height = 1, radialSegments = 8, heightSegments = 1, openEnded = false, thetaStart = 0, thetaLength = Math.PI * 2) {
    return CylinderGeometry(0, radius, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength);
}

export { ConeGeometry };
