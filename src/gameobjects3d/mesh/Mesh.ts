import { IndexedVertexBuffer, VertexBuffer } from '../../renderer/webgl1/buffers';

import { FlushBuffer } from '../../renderer/webgl1/renderpass';
import { Frame } from '../../textures/Frame';
import { GameObject3D } from '../GameObject3D';
import { GetBufferFromVertexSet } from '../../primitives/faces/GetBufferFromVertexSet';
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
    // buffer: IndexedVertexBuffer;
    buffer: VertexBuffer;

    constructor (x: number = 0, y: number = 0, z: number = 0, data?: VertexSet)
    {
        super(x, y, z);

        if (data)
        {
            this.buffer = GetBufferFromVertexSet(data);
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
        const shader = renderPass.currentShader.shader;

        const textureIndex = RequestTexture(renderPass, this.texture);

        shader.setUniform('uModelMatrix', this.transform.local.data);
        shader.setUniform('uTexture', textureIndex);

        FlushBuffer(renderPass, this.buffer);
    }

    destroy (reparentChildren?: IGameObject3D): void
    {
        super.destroy(reparentChildren);

        this.buffer.destroy();
        this.texture = null;
        this.frame = null;
        this.hasTexture = false;
    }
}
