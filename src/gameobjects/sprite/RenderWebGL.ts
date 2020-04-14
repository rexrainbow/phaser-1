import ISprite from './ISprite';
import WebGLRenderer from '../../renderer/WebGLRenderer';
import MultiTextureQuadShader from '../../renderer/MultiTextureQuadShader';

export default function RenderWebGL (sprite: ISprite, renderer: WebGLRenderer, shader: MultiTextureQuadShader, startActiveTexture: number)
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
