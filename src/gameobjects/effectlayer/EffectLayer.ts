import { GetHeight, GetResolution, GetWidth } from '../../config';

import { CreateFramebuffer } from '../../renderer/webgl1/fbo/CreateFramebuffer';
import { DrawTexturedQuad } from '../../renderer/webgl1/draw/DrawTexturedQuad';
import { GLTextureBinding } from '../../renderer/webgl1/textures/GLTextureBinding';
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

    render <T extends IWebGLRenderer> (renderer: T): void
    {
        super.render(renderer);

        if (this.numChildren > 0)
        {
            renderer.fbo.add(this.framebuffer, true);
        }
    }

    postRender <T extends IWebGLRenderer> (renderer: T): void
    {
        super.postRender(renderer);

        const shaders = this.shaders;
        const texture = this.texture;
        const { u0, v0, u1, v1 } = texture.firstFrame;

        if (shaders.length === 0)
        {
            // let shader: IShader = renderer.currentShader;
        }
        else
        {
            shaders.forEach(shader =>
            {
                //  Render all the children now
                renderer.setShader(shader, 0);

                renderer.textures.bindFBOTexture(texture);

                DrawTexturedQuad(renderer, texture.width, texture.height, u0, v0, u1, v1);

                renderer.fbo.pop();

                renderer.resetShader();

                //  To avoid forming a feedback loop
                renderer.textures.unbindFBOTexture();

            });
        }
    }
}
