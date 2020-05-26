import { GL } from '../GL.js';

function DeleteFramebuffer(framebuffer) {
    const gl = GL.get();
    if (gl && gl.isFramebuffer(framebuffer)) {
        gl.deleteFramebuffer(framebuffer);
    }
}

export { DeleteFramebuffer };
