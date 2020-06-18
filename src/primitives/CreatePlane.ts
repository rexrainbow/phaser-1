import { CreateVertexSet } from './CreateVertexSet';
import { VertexSet } from './VertexSet';

export function CreatePlane (data?: VertexSet, u: number = 0, v: number = 1, w: number = 2, udir: number = 1, vdir: number = -1, width: number = 1, height: number = 1, depth: number = 1, gridX: number = 1, gridY: number = 1): VertexSet
{
    if (!data)
    {
        data = CreateVertexSet();
    }

    const {
        vertices,
        normals,
        uvs,
        indices,
        numberOfVertices
    } = data;

    const segmentWidth = width / gridX;
    const segmentHeight = height / gridY;

    const widthHalf = width / 2;
    const heightHalf = height / 2;
    const depthHalf = depth / 2;

    const gridX1 = gridX + 1;
    const gridY1 = gridY + 1;

    let vertexCounter = 0;

    const vector = [];

    // generate vertices, normals and uvs

    for (let iy = 0; iy < gridY1; iy++)
    {
        const y = iy * segmentHeight - heightHalf;

        for (let ix = 0; ix < gridX1; ix++)
        {
            const x = ix * segmentWidth - widthHalf;

            // set values to correct vector component

            vector[ u ] = x * udir;
            vector[ v ] = y * vdir;
            vector[ w ] = depthHalf;

            // now apply vector to vertex buffer
            vertices.push(vector[0], vector[1], vector[2]);

            // set values to correct vector component

            vector[ u ] = 0;
            vector[ v ] = 0;
            vector[ w ] = depth > 0 ? 1 : - 1;

            // now apply vector to normal buffer
            normals.push(vector[0], vector[1], vector[2]);

            // uvs

            uvs.push(ix / gridX);
            uvs.push(1 - (iy / gridY));

            // counters

            vertexCounter += 1;
        }
    }

    // indices

    // 1. you need three indices to draw a single face
    // 2. a single segment consists of two faces
    // 3. so we need to generate six (2*3) indices per segment

    for (let iy = 0; iy < gridY; iy++)
    {
        for (let ix = 0; ix < gridX; ix++)
        {
            const a = numberOfVertices + ix + gridX1 * iy;
            const b = numberOfVertices + ix + gridX1 * (iy + 1);
            const c = numberOfVertices + (ix + 1) + gridX1 * (iy + 1);
            const d = numberOfVertices + (ix + 1) + gridX1 * iy;

            // faces

            indices.push(a, b, d);
            indices.push(b, c, d);
        }
    }

    // update total number of vertices
    data.numberOfVertices += vertexCounter;

    return data;
}
