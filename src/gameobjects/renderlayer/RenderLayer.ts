import { GetHeight, GetResolution, GetWidth } from '../../config';

import { CreateDepthBuffer } from '../../renderer/webgl1/fbo/CreateDepthBuffer';
import { CreateFramebuffer } from '../../renderer/webgl1/fbo/CreateFramebuffer';
import { DIRTY_CONST } from '../DIRTY_CONST';
import { DrawTexturedQuad } from '../../renderer/webgl1/draw/DrawTexturedQuad';
import { GLTextureBinding } from '../../renderer/webgl1/textures/GLTextureBinding';
import { IRenderLayer } from './IRenderLayer';
import { IRenderPass } from '../../renderer/webgl1/draw/IRenderPass';
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
        this.willCacheChildren = true;

        this.setDirty(DIRTY_CONST.CHILD_CACHE);

        const width = GetWidth();
        const height = GetHeight();
        const resolution = GetResolution();

        //  TODO: Allow them to set this via a filterArea
        //  TODO: This code is duplicate of Shader constructor, consolidate
        const texture = new Texture(null, width * resolution, height * resolution);

        const binding = new GLTextureBinding(texture);

        texture.binding = binding;

        binding.framebuffer = CreateFramebuffer(binding.texture);

        //  This must only be set for 3D layers!
        // binding.depthbuffer = CreateDepthBuffer(binding.framebuffer, texture.width, texture.height);

        this.texture = texture;
        this.framebuffer = binding.framebuffer;
    }

    renderGL <T extends IRenderPass> (renderPass: T): void
    {
        if (this.numChildren > 0)
        {
            renderPass.flush();

            if (this.isDirty(DIRTY_CONST.CHILD_CACHE))
            {
                //  This RenderLayer has dirty children
                renderPass.setFramebuffer(this.framebuffer, true);

                this.clearDirty(DIRTY_CONST.CHILD_CACHE);
            }
            else
            {
                //  This RenderLayer doesn't have any dirty children, so we'll use the previous fbo contents
                renderPass.setFramebuffer(this.framebuffer, false);

                this.postRenderGL(renderPass);
            }
        }
    }

    postRenderGL <T extends IRenderPass> (renderPass: T): void
    {
        const texture = this.texture;

        renderPass.flush();

        renderPass.popFramebuffer();

        const { u0, v0, u1, v1 } = texture.firstFrame;

        renderPass.bindTexture(texture);

        DrawTexturedQuad(renderPass, 0, 0, texture.width, texture.height, u0, v0, u1, v1);

        renderPass.unbindTexture();

        this.clearDirty(DIRTY_CONST.TRANSFORM);
    }
}
