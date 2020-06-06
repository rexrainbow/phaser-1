import { gl } from '../GL';

export function SetGLTextureFilterMode (texture: WebGLTexture, linear: boolean = true): void
{
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);

    const mode = (linear) ? gl.LINEAR : gl.NEAREST;

    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, mode);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, mode);
}
