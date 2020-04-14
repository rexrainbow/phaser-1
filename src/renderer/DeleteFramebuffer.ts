import GL from '../renderer/GL';

export default function DeleteFramebuffer (framebuffer: WebGLFramebuffer)
{
    const gl = GL.get();

    if (gl.isFramebuffer(framebuffer))
    {
        gl.deleteFramebuffer(framebuffer);
    }
}
