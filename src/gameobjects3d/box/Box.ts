import { CreateBox } from '../../primitives/CreateBox';
import { GetFacesFromVertexSet } from '../../primitives/faces/GetFacesFromVertexSet';
import { IFace } from '../../primitives/faces/IFace';
import { IRenderPass } from '../../renderer/webgl1/renderpass/IRenderPass';
import { Mesh } from '../mesh/Mesh';

export class Box extends Mesh
{
    constructor (x: number = 0, y: number = 0, z: number = 0, width: number = 1, height: number = 1, depth: number = 1, widthSegments: number = 1, heightSegments: number = 1, depthSegments: number = 1)
    {
        const data = CreateBox(x, y, z, width, height, depth, widthSegments, heightSegments, depthSegments);

        super(x, y, z, data);
    }

    /*
    renderGL <T extends IRenderPass> (renderPass: T): void
    {
        const buffer = renderPass.currentVertexBuffer;

        const F32 = buffer.vertexViewF32;
        const U32 = buffer.vertexViewU32;

        //  TODO - If dirty transform, cache face data to local buffer then copy that to vbo
        this.faces.forEach(face =>
        {
            face.addToBuffer(F32, U32, 1, buffer.offset);

            buffer.add(3);

            renderPass.count += 3;
        });
    }
    */
}
