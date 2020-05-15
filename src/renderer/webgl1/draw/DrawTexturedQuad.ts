import { BatchSingleQuad } from './BatchSingleQuad';
import { IWebGLRenderer } from '../IWebGLRenderer';

export function DrawTexturedQuad (renderer: IWebGLRenderer, x: number, y: number, width: number, height: number, u0: number, v0: number, u1: number, v1: number, textureIndex: number = 0, packedColor: number = 4294967295): void
{
    renderer.setShader(renderer.singleQuadShader, textureIndex);

    BatchSingleQuad(renderer, x, y, width, height, u0, v0, u1, v1, textureIndex, packedColor);

    renderer.resetShader();
}
