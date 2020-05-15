import { IWebGLRenderer } from '../IWebGLRenderer';

export function DrawTexturedQuad (renderer: IWebGLRenderer, width: number, height: number, u0: number, v0: number, u1: number, v1: number, textureIndex: number = 0, packedColor: number = 4294967295): void
{
    const shader = renderer.currentShader;
    const buffer = shader.buffer;

    const F32 = buffer.vertexViewF32;
    const U32 = buffer.vertexViewU32;

    const offset = shader.count * buffer.quadElementSize;

    //  top left
    F32[offset + 0] = 0;
    F32[offset + 1] = 0;
    F32[offset + 2] = u0;
    F32[offset + 3] = v1;
    F32[offset + 4] = textureIndex;
    U32[offset + 5] = packedColor;

    //  bottom left
    F32[offset + 6] = 0;
    F32[offset + 7] = height;
    F32[offset + 8] = u0;
    F32[offset + 9] = v0;
    F32[offset + 10] = textureIndex;
    U32[offset + 11] = packedColor;

    //  bottom right
    F32[offset + 12] = width;
    F32[offset + 13] = height;
    F32[offset + 14] = u1;
    F32[offset + 15] = v0;
    F32[offset + 16] = textureIndex;
    U32[offset + 17] = packedColor;

    //  top right
    F32[offset + 18] = width;
    F32[offset + 19] = 0;
    F32[offset + 20] = u1;
    F32[offset + 21] = v1;
    F32[offset + 22] = textureIndex;
    U32[offset + 23] = packedColor;

    shader.count++;
}
