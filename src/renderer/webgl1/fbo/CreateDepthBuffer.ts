import { GL } from '../GL';

export function CreateDepthBuffer (framebuffer: WebGLFramebuffer, textureWidth: number, textureHeight: number): WebGLRenderbuffer
{
    const gl = GL.get();

    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);

    const depthBuffer = gl.createRenderbuffer();

    gl.bindRenderbuffer(gl.RENDERBUFFER, depthBuffer);

    gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, textureWidth, textureHeight);

    gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, depthBuffer);

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    return depthBuffer;
}
