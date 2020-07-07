import '../utils/base64/Base64ToArrayBuffer.js';
import '../utils/NOOP.js';
import '../math/mat4/Matrix4.js';
import { Vec3 } from '../math/vec3/Vec3.js';
import '../math/mat4/Invert.js';
import '../math/mat4/Multiply.js';
import '../math/vec3/Backward.js';
import '../math/vec3/Down.js';
import '../math/vec3/Forward.js';
import '../math/vec3/Left.js';
import '../math/vec3/Right.js';
import '../math/vec3/Up.js';
import '../math/vec3/Zero.js';
import '../math/vec3/const.js';
import '../math/vec3/Scale.js';
import { Normalize } from '../math/vec3/Normalize.js';
import '../math/vec3/TransformMat4.js';
import '../math/vec3/Project.js';
import { Subtract } from '../math/vec3/Subtract.js';
import '../math/vec3/Unproject.js';
import { CreateVertexSet } from '../gameobjects3d/geometry/CreateVertexSet.js';

function TorusGeometry(radius = 1, tube = 0.4, radialSegments = 8, tubularSegments = 6, arc = Math.PI * 2) {
    const data = CreateVertexSet();
    const { vertices, normals, uvs, indices } = data;
    const center = new Vec3();
    const vertex = new Vec3();
    const normal = new Vec3();
    for (let j = 0; j <= radialSegments; j++) {
        for (let i = 0; i <= tubularSegments; i++) {
            const u = i / tubularSegments * arc;
            const v = j / radialSegments * Math.PI * 2;
            vertex.x = (radius + tube * Math.cos(v)) * Math.cos(u);
            vertex.y = (radius + tube * Math.cos(v)) * Math.sin(u);
            vertex.z = tube * Math.sin(v);
            vertices.push(vertex.x, vertex.y, vertex.z);
            center.x = radius * Math.cos(u);
            center.y = radius * Math.sin(u);
            Subtract(vertex, center, normal);
            Normalize(normal, normal);
            normals.push(normal.x, normal.y, normal.z);
            uvs.push(i / tubularSegments);
            uvs.push(j / radialSegments);
        }
    }
    for (let j = 1; j <= radialSegments; j++) {
        for (let i = 1; i <= tubularSegments; i++) {
            const a = (tubularSegments + 1) * j + i - 1;
            const b = (tubularSegments + 1) * (j - 1) + i - 1;
            const c = (tubularSegments + 1) * (j - 1) + i;
            const d = (tubularSegments + 1) * j + i;
            indices.push(a, b, d);
            indices.push(b, c, d);
        }
    }
    data.numberOfVertices = vertices.length;
    return data;
}

export { TorusGeometry };
