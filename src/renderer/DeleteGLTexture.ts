import GL from '../renderer/GL';

export default function DeleteGLTexture (texture: WebGLTexture)
{
    const gl = GL.get();

    if (gl.isTexture(texture))
    {
        gl.deleteTexture(texture);
    }
}
