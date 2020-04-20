import { IShader } from '../../renderer/webgl1/shaders/IShader';
import { WebGLRenderer } from '../../renderer/webgl1/WebGLRenderer';
import { ISprite } from './ISprite';

export function RenderWebGL (sprite: ISprite, renderer: WebGLRenderer, shader: IShader, startActiveTexture: number)
{
    const texture = sprite.texture;

    if (texture.glIndexCounter < startActiveTexture)
    {
        renderer.requestTexture(texture);
    }

    if (shader.count === shader.batchSize)
    {
        shader.flush();
    }

    sprite.uploadBuffers(shader.vertexViewF32, shader.vertexViewU32, shader.count * shader.quadElementSize);

    shader.count++;
}
