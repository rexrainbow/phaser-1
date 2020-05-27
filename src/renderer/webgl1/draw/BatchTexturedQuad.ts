import { ISprite } from '../../../gameobjects/sprite/ISprite';
import { IWebGLRenderer } from '../IWebGLRenderer';

export function BatchTexturedQuad <T extends ISprite> (sprite: T, renderer: IWebGLRenderer): void
{
    const texture = sprite.texture;
    const shader = renderer.shaders.current;
    const buffer = shader.buffer;
    const binding = texture.binding;

    if (shader.count === buffer.batchSize)
    {
        renderer.flush();
    }

    renderer.textures.request(texture);

    const textureIndex = binding.index;

    const vertices = sprite.vertices;

    const F32 = buffer.vertexViewF32;
    const U32 = buffer.vertexViewU32;

    let offset = shader.count * buffer.entryElementSize;

    vertices.forEach(vertex =>
    {
        F32[offset + 0] = vertex.x;
        F32[offset + 1] = vertex.y;
        F32[offset + 2] = vertex.u;
        F32[offset + 3] = vertex.v;
        F32[offset + 4] = textureIndex;
        U32[offset + 5] = vertex.color;

        offset += 6;
    });

    shader.count++;
}

/*
    vertexData array structure:

    0 = topLeft.x
    1 = topLeft.y
    2 = frame.u0
    3 = frame.v0
    4 = textureIndex
    5 = topLeft.packedColor

    6 = bottomLeft.x
    7 = bottomLeft.y
    8 = frame.u0
    9 = frame.v1
    10 = textureIndex
    11 = bottomLeft.packedColor

    12 = bottomRight.x
    13 = bottomRight.y
    14 = frame.u1
    15 = frame.v1
    16 = textureIndex
    17 = bottomRight.packedColor

    18 = topRight.x
    19 = topRight.y
    20 = frame.u1
    21 = frame.v0
    22 = textureIndex
    23 = topRight.packedColor
*/
