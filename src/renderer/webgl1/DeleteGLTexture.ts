import { GL } from './GL';

export function DeleteGLTexture (texture: WebGLTexture)
{
    const gl = GL.get();

    if (gl.isTexture(texture))
    {
        gl.deleteTexture(texture);
    }
}
