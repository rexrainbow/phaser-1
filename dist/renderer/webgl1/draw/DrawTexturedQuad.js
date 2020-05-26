import { BatchSingleQuad } from './BatchSingleQuad.js';

function DrawTexturedQuad(renderer, x, y, width, height, u0, v0, u1, v1, textureIndex = 0, packedColor = 4294967295) {
    renderer.shaders.setDefault(textureIndex);
    BatchSingleQuad(renderer, x, y, width, height, u0, v0, u1, v1, textureIndex, packedColor);
    renderer.shaders.popAndRebind();
}

export { DrawTexturedQuad };
