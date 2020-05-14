import { GetHeight, GetResolution, GetWidth } from '../../config';

import { CreateFramebuffer } from '../../renderer/webgl1/fbo/CreateFramebuffer';
import { GLTextureBinding } from '../../textures';
import { IShader } from '../../renderer/webgl1/shaders/IShader';
import { IWebGLRenderer } from '../../renderer/webgl1/IWebGLRenderer';
import { Layer } from '../layer/Layer';
import { Texture } from '../../textures/Texture';

//  A WebGL specific EffectLayer
//  EffectLayerCanvas is a canvas alternative
export class EffectLayer extends Layer
{
    shaders: IShader[] = [];
    texture: Texture;
    framebuffer: WebGLFramebuffer;

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

        //  TODO: Allow them to set this via a filterArea
        const texture = new Texture(null, width * resolution, height * resolution);

        texture.binding = new GLTextureBinding(texture);

        texture.binding.framebuffer = CreateFramebuffer(texture.binding.texture);

        this.texture = texture;
        this.framebuffer = texture.binding.framebuffer;
    }

    renderGL <T extends IWebGLRenderer> (renderer: T): void
    {
        super.renderGL(renderer);

        if (this.numChildren > 0)
        {
            renderer.setFramebuffer(this.framebuffer, true);
        }
    }

    postRenderGL <T extends IWebGLRenderer> (renderer: T): void
    {
        super.postRenderGL(renderer);

        const shaders = this.shaders;
        const texture = this.texture;
        const binding = texture.binding;
        const { u0, v0, u1, v1 } = texture.firstFrame;
        const packedColor = 4294967295;

        if (shaders.length === 0)
        {
            // let shader: IShader = renderer.currentShader;
        }
        else
        {
            shaders.forEach(shader =>
            {
                //  TODO - Combine
                renderer.setShader(shader);

                renderer.resetTextures(texture);

                const textureIndex = binding.index;

                const F32 = shader.vertexViewF32;
                const U32 = shader.vertexViewU32;

                //  top left
                F32[0] = 0;
                F32[1] = 0;
                F32[2] = u0;
                F32[3] = v1;
                F32[4] = textureIndex;
                U32[5] = packedColor;

                //  bottom left
                F32[6] = 0;
                F32[7] = texture.height;
                F32[8] = u0;
                F32[9] = v0;
                F32[10] = textureIndex;
                U32[11] = packedColor;

                //  bottom right
                F32[12] = texture.width;
                F32[13] = texture.height;
                F32[14] = u1;
                F32[15] = v0;
                F32[16] = textureIndex;
                U32[17] = packedColor;

                //  top right
                F32[18] = texture.width;
                F32[19] = 0;
                F32[20] = u1;
                F32[21] = v1;
                F32[22] = textureIndex;
                U32[23] = packedColor;

                shader.count = 1;

                renderer.resetFramebuffer();

                shader.flush(renderer);

                renderer.resetShader();
            });
        }

        renderer.resetTextures();
    }
}
