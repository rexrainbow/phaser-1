import '../../renderer/webgl1/GL.js';
import '../../renderer/webgl1/buffers/DeleteGLBuffer.js';
import { VertexBuffer } from '../../renderer/webgl1/buffers/VertexBuffer.js';
import { ParseObj } from './ParseObj.js';

function GetBufferFromObj(data, flipUVs = true) {
    const parser = new ParseObj(data, flipUVs);
    const result = parser.parse();
    const output = [];
    result.models.forEach(model => {
        const { faces, textureCoords, vertexNormals, vertices } = model;
        const buffer = new VertexBuffer({ batchSize: faces.length, isDynamic: false, vertexElementSize: 8, elementsPerEntry: 3 });
        const F32 = buffer.vertexViewF32;
        let offset = 0;
        for (let i = 0; i < faces.length; i++) {
            const face = faces[i];
            const i1 = face.vertices[0];
            const i2 = face.vertices[1];
            const i3 = face.vertices[2];
            const v1 = vertices[i1.vertexIndex];
            const v2 = vertices[i2.vertexIndex];
            const v3 = vertices[i3.vertexIndex];
            const n1 = vertexNormals[i1.vertexNormalIndex];
            const n2 = vertexNormals[i2.vertexNormalIndex];
            const n3 = vertexNormals[i3.vertexNormalIndex];
            const uv1 = textureCoords[i1.textureCoordsIndex];
            const uv2 = textureCoords[i2.textureCoordsIndex];
            const uv3 = textureCoords[i3.textureCoordsIndex];
            F32[offset++] = v1.x;
            F32[offset++] = v1.y;
            F32[offset++] = v1.z;
            F32[offset++] = n1.x;
            F32[offset++] = n1.y;
            F32[offset++] = n1.z;
            F32[offset++] = uv1.u;
            F32[offset++] = uv1.v;
            F32[offset++] = v2.x;
            F32[offset++] = v2.y;
            F32[offset++] = v2.z;
            F32[offset++] = n2.x;
            F32[offset++] = n2.y;
            F32[offset++] = n2.z;
            F32[offset++] = uv2.u;
            F32[offset++] = uv2.v;
            F32[offset++] = v3.x;
            F32[offset++] = v3.y;
            F32[offset++] = v3.z;
            F32[offset++] = n3.x;
            F32[offset++] = n3.y;
            F32[offset++] = n3.z;
            F32[offset++] = uv3.u;
            F32[offset++] = uv3.v;
        }
        buffer.count = faces.length * 3;
        output.push({ name: model.name, buffer });
    });
    return output;
}

export { GetBufferFromObj };
