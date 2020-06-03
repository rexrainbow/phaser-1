import { BatchSingleQuad } from './BatchSingleQuad';
import { IRenderPass } from './IRenderPass';
import { IWebGLRenderer } from '../IWebGLRenderer';

export function DrawTexturedQuad (renderPass: IRenderPass, x: number, y: number, width: number, height: number, u0: number, v0: number, u1: number, v1: number, textureIndex: number = 0, packedColor: number = 4294967295): void
{
    //  set the single quad shader
    //  batch it
    //  flush and reset to previous shader

    //  set single quad shader, not default:
    // renderer.shaders.setDefault(textureIndex);

    // BatchSingleQuad(renderer, x, y, width, height, u0, v0, u1, v1, textureIndex, packedColor);

    // renderer.shaders.popAndRebind();
}
