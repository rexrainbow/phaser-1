import { GetHeight, GetResolution, GetWidth } from '../../config';

import { BatchSingleQuad } from '../../renderer/webgl1/draw/BatchSingleQuad';
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

    //  TODO - If none of the children or the camera are dirty, we can reuse the FBO from the previous frame to save
    //  re-rendering them all again. This needs to be implemented in the World buildRenderList too.

    render <T extends IWebGLRenderer> (renderer: T): void
    {
        super.render(renderer);

        renderer.flush();

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

        renderer.flush();

        renderer.fbo.pop();

        //  this.framebuffer now contains a texture with all of this layers sprites drawn to it

        if (shaders.length === 0)
        {
            const { u0, v0, u1, v1 } = texture.firstFrame;

            renderer.textures.bind(texture);

            DrawTexturedQuad(renderer, 0, 0, texture.width, texture.height, u0, v0, u1, v1);

            renderer.textures.unbind();
        }
        else
        {
            let prevTexture = texture;

            for (let i: number = 0; i < shaders.length; i++)
            {
                const shader = shaders[i];

                const { u0, v0, u1, v1 } = prevTexture.firstFrame;

                renderer.setShader(shader, 0);

                shader.renderToFBO = true;

                //  The shaders input texture
                renderer.textures.bind(prevTexture);

                BatchSingleQuad(renderer, 0, 0, prevTexture.width, prevTexture.height, u0, v0, u1, v1);

                renderer.popShader();

                renderer.textures.unbind();

                prevTexture = shader.texture;
            }

            const { u0, v0, u1, v1 } = prevTexture.firstFrame;

            renderer.textures.bind(prevTexture);

            DrawTexturedQuad(renderer, 0, 0, prevTexture.width, prevTexture.height, u0, v0, u1, v1);

            renderer.textures.unbind();
        }
    }
}
