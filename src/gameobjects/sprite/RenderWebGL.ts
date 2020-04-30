import { GLTextureBinding } from '../../textures/GLTextureBinding';
import { IShader } from '../../renderer/webgl1/shaders/IShader';
import { ISprite } from './ISprite';
import { UploadBuffers } from './UploadBuffers';
import { WebGLRenderer } from '../../renderer/webgl1/WebGLRenderer';

export function RenderWebGL (sprite: ISprite, renderer: WebGLRenderer, shader: IShader, startActiveTexture: number): void
{
    const texture = sprite.texture;

    if (!texture.binding)
    {
        texture.binding = new GLTextureBinding(texture);
    }

    if (texture.binding.indexCounter < startActiveTexture)
    {
        renderer.requestTexture(texture);
    }

    if (shader.count === shader.batchSize)
    {
        shader.flush();
    }

    UploadBuffers(sprite, shader.vertexViewF32, shader.vertexViewU32, shader.count * shader.quadElementSize);

    shader.count++;
}
