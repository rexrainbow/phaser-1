import { gl } from '../GL';

export function DeleteFramebuffer (framebuffer: WebGLFramebuffer): void
{
    if (gl && gl.isFramebuffer(framebuffer))
    {
        gl.deleteFramebuffer(framebuffer);
    }
}
