import { BatchSingleQuad } from '../../renderer/webgl1/draw/BatchSingleQuad';
import { DIRTY_CONST } from '../DIRTY_CONST';
import { DrawTexturedQuad } from '../../renderer/webgl1/draw/DrawTexturedQuad';
import { IEffectLayer } from './IEffectLayer';
import { IShader } from '../../renderer/webgl1/shaders/IShader';
import { IWebGLRenderer } from '../../renderer/webgl1/IWebGLRenderer';
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

    postRender <T extends IWebGLRenderer> (renderer: T): void
    {
        const shaders = this.shaders;
        const texture = this.texture;

        renderer.flush();

        renderer.fbo.pop();

        //  this.framebuffer contains a texture with all of this layers sprites drawn to it

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

                if (renderer.shaders.set(shader, 0))
                {
                    shader.renderToFBO = true;

                    //  The shaders input texture
                    renderer.textures.bind(prevTexture);

                    BatchSingleQuad(renderer, 0, 0, prevTexture.width, prevTexture.height, u0, v0, u1, v1);

                    renderer.shaders.pop();

                    renderer.textures.unbind();

                    prevTexture = shader.texture;
                }
            }

            const { u0, v0, u1, v1 } = prevTexture.firstFrame;

            renderer.textures.bind(prevTexture);

            DrawTexturedQuad(renderer, 0, 0, prevTexture.width, prevTexture.height, u0, v0, u1, v1);

            renderer.textures.unbind();
        }

        this.clearDirty(DIRTY_CONST.TRANSFORM);
    }
}
