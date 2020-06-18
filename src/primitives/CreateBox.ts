import { CreatePlane } from './CreatePlane';
import { CreateVertexSet } from './CreateVertexSet';
import { VertexSet } from './VertexSet';

export function CreateBox (width: number = 1, height: number = 1, depth: number = 1, widthSegments: number = 1, heightSegments: number = 1, depthSegments: number = 1): VertexSet
{
    const data = CreateVertexSet();

    CreatePlane(data, 2, 1, 0, -1, -1, depth, height, width, depthSegments, heightSegments);
    CreatePlane(data, 2, 1, 0, 1, -1, depth, height, -width, depthSegments, heightSegments);
    CreatePlane(data, 0, 2, 1, 1, 1, width, depth, height, widthSegments, depthSegments);
    CreatePlane(data, 0, 2, 1, 1, -1, width, depth, -height, widthSegments, depthSegments);
    CreatePlane(data, 0, 1, 2, 1, -1, width, height, depth, widthSegments, heightSegments);
    CreatePlane(data, 0, 1, 2, -1, -1, width, height, -depth, widthSegments, heightSegments);

    return data;
}
