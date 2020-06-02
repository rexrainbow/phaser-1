import * as GL_CONST from '../GL_CONST';

// gl.vertexAttribPointer(attribs.aVertexPosition, 2, gl.FLOAT, false, stride, 0);     // size = 8
// gl.vertexAttribPointer(attribs.aTextureCoord, 2, gl.FLOAT, false, stride, 8);       // size = 8, offset = position
// gl.vertexAttribPointer(attribs.aTextureId, 1, gl.FLOAT, false, stride, 16);         // size = 4, offset = position + tex coord
// gl.vertexAttribPointer(attribs.aTintColor, 4, gl.UNSIGNED_BYTE, true, stride, 20);  // size = 4, offset = position + tex coord + index

export const DefaultQuadAttributes =
{
    aVertexPosition: { size: 2, type: GL_CONST.FLOAT, normalized: false, offset: 0 },
    aTextureCoord: { size: 2, type: GL_CONST.FLOAT, normalized: false, offset: 8 },
    aTextureId: { size: 1, type: GL_CONST.FLOAT, normalized: false, offset: 16 },
    aTintColor: { size: 4, type: GL_CONST.UNSIGNED_BYTE, normalized: true, offset: 20 }
};
