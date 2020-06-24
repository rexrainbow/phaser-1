import { FlushBuffer } from '../../renderer/webgl1/renderpass';
import { Frame } from '../../textures/Frame';
import { GameObject3D } from '../GameObject3D';
import { Geometry } from '../geometry/Geometry';
import { IGameObject3D } from '../IGameObject3D';
import { IRenderPass } from '../../renderer/webgl1/renderpass/IRenderPass';
import { RGBACallback } from '../../math/vec4';
import { SetTexture as RequestTexture } from '../../renderer/webgl1/renderpass/SetTexture';
import { SetFrame } from './SetFrame';
import { SetTexture } from './SetTexture';
import { Texture } from '../../textures/Texture';

export class Mesh extends GameObject3D
{
    texture: Texture;
    frame: Frame;
    hasTexture: boolean = false;

    geometry: Geometry;

    cullFaces: boolean = true;

    shineAmount: number = 1;

    materialAmbient: RGBACallback;
    materialDiffuse: RGBACallback;
    materialSpecular: RGBACallback;

    constructor (x: number = 0, y: number = 0, z: number = 0, geometry?: Geometry)
    {
        super(x, y, z);

        this.geometry = geometry;
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

        FlushBuffer(renderPass, this.geometry.buffer);
    }

    destroy (reparentChildren?: IGameObject3D): void
    {
        super.destroy(reparentChildren);

        this.geometry.destroy();
        this.texture = null;
        this.frame = null;
        this.hasTexture = false;
    }
}
