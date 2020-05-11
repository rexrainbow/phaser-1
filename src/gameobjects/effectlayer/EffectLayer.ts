import { GetHeight, GetResolution, GetWidth } from '../../config';

import { CreateFramebuffer } from '../../renderer/webgl1';
import { GLTextureBinding } from '../../textures';
import { IRenderer } from '../../renderer/IRenderer';
import { IShader } from '../../renderer/webgl1/shaders/IShader';
import { IWebGLRenderer } from '../../renderer/IWebGLRenderer';
import { Layer } from '../layer/Layer';
import { Texture } from '../../textures/Texture';

//  A WebGL specific EffectLayer
//  EffectLayerCanvas is a canvas alternative
export class EffectLayer extends Layer
{
    shader: IShader;
    texture: Texture;

    constructor ()
    {
        super();

        this.type = 'EffectLayer';

        this.transform.passthru = true;

        this.willRender = true;
        this.willRenderChildren = true;

        const width = GetWidth();
        const height = GetHeight();
        const resolution = GetResolution();

        const [ glTexture, framebuffer ] = CreateFramebuffer(width * resolution, height * resolution);

        this.texture = new Texture(null, width * resolution, height * resolution);

        this.texture.binding = new GLTextureBinding(this.texture);

        this.texture.binding.texture = glTexture;
        this.texture.binding.framebuffer = framebuffer;
    }

    render <T extends IRenderer | IWebGLRenderer> (renderer: T): void
    {
        super.render(renderer);

        if (this.numChildren > 0)
        {
            (renderer as IWebGLRenderer).setFramebuffer(this.texture.binding.framebuffer);
        }
    }

    postRender <T extends IRenderer | IWebGLRenderer> (renderer: T): void
    {
        super.postRender(renderer);

        if (this.numChildren > 0)
        {
            const shader = (renderer as IWebGLRenderer).currentShader;

            shader.flush(renderer);

            const texture = this.texture;
            const binding = texture.binding;

            if (binding.indexCounter < (renderer as IWebGLRenderer).startActiveTexture)
            {
                (renderer as IWebGLRenderer).requestTexture(texture);
            }

            const textureIndex = binding.index;
            const { u0, v0, u1, v1 } = texture.firstFrame;

            const F32 = shader.vertexViewF32;
            const U32 = shader.vertexViewU32;

            const packedColor = 4294967295;

            //  top left
            F32[0] = 0;
            F32[1] = 0;
            F32[2] = u0;
            F32[3] = v0;
            F32[4] = textureIndex;
            U32[5] = packedColor;

            //  bottom left
            F32[6] = 0;
            F32[7] = texture.height;
            F32[8] = u0;
            F32[9] = v1;
            F32[10] = textureIndex;
            U32[11] = packedColor;

            //  bottom right
            F32[12] = texture.width;
            F32[13] = texture.height;
            F32[14] = u1;
            F32[15] = v1;
            F32[16] = textureIndex;
            U32[17] = packedColor;

            //  top right
            F32[18] = texture.width;
            F32[19] = 0;
            F32[20] = u1;
            F32[21] = v0;
            F32[22] = textureIndex;
            U32[23] = packedColor;

            shader.count = 1;

            shader.flush(renderer);

            (renderer as IWebGLRenderer).resetFramebuffer();
            (renderer as IWebGLRenderer).resetTextures();

            if (this.shader)
            {
                (renderer as IWebGLRenderer).resetShader();
            }
        }
    }
}
