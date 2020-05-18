import { GetHeight, GetResolution, GetWidth } from '../../config';

import { CreateFramebuffer } from '../../renderer/webgl1/fbo/CreateFramebuffer';
import { DrawTexturedQuad } from '../../renderer/webgl1/draw/DrawTexturedQuad';
import { GLTextureBinding } from '../../renderer/webgl1/textures/GLTextureBinding';
import { IRenderLayer } from './IRenderLayer';
import { IWebGLRenderer } from '../../renderer/webgl1/IWebGLRenderer';
import { Layer } from '../layer/Layer';
import { Texture } from '../../textures/Texture';

//  The RenderLayer works like a normal Layer, except it automatically caches
//  all of its renderable children to its own texture. The children are drawn
//  to the RenderLayers texture and then the RenderLayer texture is drawn to
//  the WebGL Renderer. You should use a RenderLayer if you've got a complex or
//  large set of Game Objects that don't update very often, where you would
//  benefit from not having to re-render every single child, every frame.

export class RenderLayer extends Layer implements IRenderLayer
{
    texture: Texture;
    framebuffer: WebGLFramebuffer;

    constructor ()
    {
        super();

        this.type = 'RenderLayer';

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

        if (this.numChildren > 0)
        {
            renderer.flush();

            renderer.fbo.add(this.framebuffer, true);
        }
    }

    postRender <T extends IWebGLRenderer> (renderer: T): void
    {
        super.postRender(renderer);

        if (this.numChildren === 0)
        {
            return;
        }

        const texture = this.texture;

        renderer.flush();

        renderer.fbo.pop();

        const { u0, v0, u1, v1 } = texture.firstFrame;

        renderer.textures.bind(texture);

        DrawTexturedQuad(renderer, 0, 0, texture.width, texture.height, u0, v0, u1, v1);

        renderer.textures.unbind();
    }
}
