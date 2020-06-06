import * as GL_CONST from '../GL_CONST';

// size = 8
// size = 8, offset = position
// size = 4, offset = position + tex coord
// size = 4, offset = position + tex coord + index

export const DefaultQuadAttributes =
{
    aVertexPosition: { size: 2, type: GL_CONST.FLOAT, normalized: false, offset: 0 },
    aTextureCoord: { size: 2, type: GL_CONST.FLOAT, normalized: false, offset: 8 },
    aTextureId: { size: 1, type: GL_CONST.FLOAT, normalized: false, offset: 16 },
    aTintColor: { size: 4, type: GL_CONST.UNSIGNED_BYTE, normalized: true, offset: 20 }
};
