import { BatchSingleQuad } from './BatchSingleQuad';
import { IRenderPass } from '../renderpass/IRenderPass';

export function DrawTexturedQuad (renderPass: IRenderPass, x: number, y: number, width: number, height: number, u0: number, v0: number, u1: number, v1: number, textureIndex: number = 0, packedColor: number = 4294967295): void
{
    // renderPass.shader.setSingleQuadShader(textureIndex);

    // BatchSingleQuad(renderPass, x, y, width, height, u0, v0, u1, v1, textureIndex, packedColor);

    // renderPass.popShaderAndRebind();
}
