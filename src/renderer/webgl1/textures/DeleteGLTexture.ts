import { gl } from '../GL';

export function DeleteGLTexture (texture: WebGLTexture): void
{
    if (gl.isTexture(texture))
    {
        gl.deleteTexture(texture);
    }
}
