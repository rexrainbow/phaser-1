import { ISprite } from '../../../gameobjects/sprite/ISprite';
import { IWebGLRenderer } from '../IWebGLRenderer';

export function BatchTexturedQuad <T extends ISprite> (sprite: T, renderer: IWebGLRenderer): void
{
    const texture = sprite.texture;
    const shader = renderer.currentShader;
    const buffer = shader.buffer;
    const binding = texture.binding;

    if (shader.count === buffer.batchSize)
    {
        renderer.flush();
    }

    renderer.textures.request(texture);

    const data = sprite.vertexData;
    const textureIndex = binding.index;

    //  Inject the texture ID
    data[4] = textureIndex;
    data[10] = textureIndex;
    data[16] = textureIndex;
    data[22] = textureIndex;

    const offset = shader.count * buffer.quadElementSize;

    //  Copy the data to the array buffer
    buffer.vertexViewF32.set(data, offset);

    const color = sprite.vertexColor;
    const U32 = buffer.vertexViewU32;

    //  Copy the vertex colors to the Uint32 view (as the data copy above overwrites them)
    U32[offset + 5] = color[0];
    U32[offset + 11] = color[2];
    U32[offset + 17] = color[3];
    U32[offset + 23] = color[1];

    shader.count++;
}
