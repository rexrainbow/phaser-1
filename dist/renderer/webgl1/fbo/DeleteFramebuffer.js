import { gl } from '../GL.js';

function DeleteFramebuffer(framebuffer) {
    if (gl && gl.isFramebuffer(framebuffer)) {
        gl.deleteFramebuffer(framebuffer);
    }
}

export { DeleteFramebuffer };
