import { BatchSingleQuad } from '../../renderer/webgl1/draw/BatchSingleQuad';
import { DIRTY_CONST } from '../DIRTY_CONST';
import { DrawTexturedQuad } from '../../renderer/webgl1/draw/DrawTexturedQuad';
import { IEffectLayer } from './IEffectLayer';
import { IRenderPass } from '../../renderer/webgl1/draw/IRenderPass';
import { IShader } from '../../renderer/webgl1/shaders/IShader';
import { RenderLayer } from '../renderlayer/RenderLayer';

//  A WebGL specific EffectLayer
//  EffectLayerCanvas is a canvas alternative

export class EffectLayer extends RenderLayer implements IEffectLayer
{
    shaders: IShader[] = [];

    constructor ()
    {
        super();

        this.type = 'EffectLayer';
    }

    postRenderGL <T extends IRenderPass> (renderPass: T): void
    {
        const shaders = this.shaders;
        const texture = this.texture;

        renderPass.flush();

        renderPass.popFramebuffer();

        //  this.framebuffer contains a texture with all of this layers sprites drawn to it

        if (shaders.length === 0)
        {
            const { u0, v0, u1, v1 } = texture.firstFrame;

            renderPass.bindTexture(texture);

            DrawTexturedQuad(renderPass, 0, 0, texture.width, texture.height, u0, v0, u1, v1);

            renderPass.unbindTexture();
        }
        else
        {
            let prevTexture = texture;

            for (let i: number = 0; i < shaders.length; i++)
            {
                const shader = shaders[i];

                const { u0, v0, u1, v1 } = prevTexture.firstFrame;

                if (renderPass.setShader(shader, 0))
                {
                    const renderToFBO = shader.renderToFramebuffer;

                    shader.renderToFramebuffer = true;

                    //  The shaders input texture
                    renderPass.bindTexture(prevTexture);

                    BatchSingleQuad(renderPass, 0, 0, prevTexture.width, prevTexture.height, u0, v0, u1, v1);

                    renderPass.popShader();

                    shader.renderToFramebuffer = renderToFBO;

                    renderPass.unbindTexture();

                    prevTexture = shader.texture;
                }
            }

            const { u0, v0, u1, v1 } = prevTexture.firstFrame;

            renderPass.bindTexture(prevTexture);

            DrawTexturedQuad(renderPass, 0, 0, prevTexture.width, prevTexture.height, u0, v0, u1, v1);

            renderPass.unbindTexture();
        }

        this.clearDirty(DIRTY_CONST.TRANSFORM);
    }
}
