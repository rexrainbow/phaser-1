import { CreateBox } from '../../primitives/CreateBox';
import { Mesh } from '../mesh/Mesh';

export class Box extends Mesh
{
    constructor (x: number = 0, y: number = 0, z: number = 0, width: number = 1, height: number = 1, depth: number = 1, widthSegments: number = 1, heightSegments: number = 1, depthSegments: number = 1)
    {
        const data = CreateBox(0, 0, 0, width, height, depth, widthSegments, heightSegments, depthSegments);

        super(x, y, z, data);
    }
}
