import GL from './GL';
import CreateGLTexture from './CreateGLTexture';

export default function CreateFramebuffer (width: number, height: number): [ WebGLTexture, WebGLFramebuffer ]
{
    const gl = GL.get();
    const texture = CreateGLTexture(null, width, height);
    const framebuffer = gl.createFramebuffer();

    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);

    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    return [ texture, framebuffer ];
}
