import { ISprite } from '../../../gameobjects/sprite/ISprite';
import { WebGLRenderer } from '../WebGLRenderer';

export function BatchTexturedQuad <T extends ISprite> (sprite: T, renderer: WebGLRenderer): void
{
    const texture = sprite.texture;
    const shader = renderer.currentShader;
    const binding = texture.binding;

    if (binding.indexCounter < renderer.startActiveTexture)
    {
        renderer.requestTexture(texture);
    }

    if (shader.count === shader.batchSize)
    {
        shader.flush(renderer);
    }

    const data = sprite.vertexData;
    const textureIndex = binding.index;

    //  Inject the texture ID
    data[4] = textureIndex;
    data[10] = textureIndex;
    data[16] = textureIndex;
    data[22] = textureIndex;

    const offset = shader.count * shader.quadElementSize;

    //  Copy the data to the array buffer
    shader.vertexViewF32.set(data, offset);

    const color = sprite.vertexColor;
    const U32 = shader.vertexViewU32;

    //  Copy the vertex colors to the Uint32 view (as the data copy above overwrites them)
    U32[offset + 5] = color[0];
    U32[offset + 11] = color[2];
    U32[offset + 17] = color[3];
    U32[offset + 23] = color[1];

    shader.count++;
}
