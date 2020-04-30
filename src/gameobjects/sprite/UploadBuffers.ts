import { ISprite } from './ISprite';
import { PackColors } from '../../renderer/webgl1/PackColors';
import { UpdateVertices } from './UpdateVertices';

export function UploadBuffers (sprite: ISprite, F32: Float32Array, U32: Uint32Array, offset: number, setTexture: boolean = true): void
{
    const dirty = sprite.dirty;

    if (dirty.colors)
    {
        PackColors(sprite);

        dirty.colors = false;
    }

    if (dirty.render)
    {
        UpdateVertices(sprite);

        dirty.render = false;
    }

    const data = sprite.vertexData;
    const textureIndex = sprite.texture.glIndex;

    //  Do we have a different texture ID?
    if (setTexture && textureIndex !== sprite.prevTextureID)
    {
        sprite.prevTextureID = textureIndex;

        data[4] = textureIndex;
        data[10] = textureIndex;
        data[16] = textureIndex;
        data[22] = textureIndex;
    }

    //  Copy the data to the array buffer
    F32.set(data, offset);

    const color = sprite.vertexColor;

    //  Copy the vertex colors to the Uint32 view (as the data copy above overwrites them)
    U32[offset + 5] = color[0];
    U32[offset + 11] = color[2];
    U32[offset + 17] = color[3];
    U32[offset + 23] = color[1];
}
