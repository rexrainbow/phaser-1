import { Frame } from '../../textures/Frame';
import { GameObject3D } from '../GameObject3D';
import { GetFacesFromVertexSet } from '../../primitives/faces/GetFacesFromVertexSet';
import { IFace } from '../../primitives/faces/IFace';
import { IGameObject3D } from '../IGameObject3D';
import { IRenderPass } from '../../renderer/webgl1/renderpass/IRenderPass';
import { SetTexture as RequestTexture } from '../../renderer/webgl1/renderpass/SetTexture';
import { SetFrame } from './SetFrame';
import { SetTexture } from './SetTexture';
import { Texture } from '../../textures/Texture';
import { VertexSet } from '../../primitives/VertexSet';

export class Mesh extends GameObject3D
{
    texture: Texture;
    frame: Frame;
    hasTexture: boolean = false;
    faces: IFace[];

    constructor (x: number = 0, y: number = 0, z: number = 0, data?: VertexSet)
    {
        super(x, y, z);

        if (data)
        {
            this.faces = GetFacesFromVertexSet(data);
        }
    }

    setTexture (key: string | Texture, frame?: string | number): this
    {
        SetTexture(key, frame, this);

        return this;
    }

    setFrame (key?: string | number | Frame): this
    {
        SetFrame(this.texture, key, this);

        return this;
    }

    renderGL <T extends IRenderPass> (renderPass: T): void
    {
        const buffer = renderPass.currentVertexBuffer;

        const F32 = buffer.vertexViewF32;
        const U32 = buffer.vertexViewU32;

        const textureIndex = RequestTexture(renderPass, this.texture);

        //  TODO - If dirty transform, cache face data to local buffer then copy that to vbo
        this.faces.forEach(face =>
        {
            face.addToBuffer(F32, U32, textureIndex, buffer.offset);

            buffer.add(3);

            renderPass.count += 3;
        });
    }

    destroy (reparentChildren?: IGameObject3D): void
    {
        super.destroy(reparentChildren);

        this.texture = null;
        this.frame = null;
        this.hasTexture = false;
        this.faces = [];
    }
}
