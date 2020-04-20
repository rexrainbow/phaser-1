import { GL } from './GL';

export function DeleteFramebuffer (framebuffer: WebGLFramebuffer)
{
    const gl = GL.get();

    if (gl.isFramebuffer(framebuffer))
    {
        gl.deleteFramebuffer(framebuffer);
    }
}
