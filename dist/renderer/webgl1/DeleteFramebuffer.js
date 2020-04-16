import GL from './GL';
export default function DeleteFramebuffer(framebuffer) {
    const gl = GL.get();
    if (gl.isFramebuffer(framebuffer)) {
        gl.deleteFramebuffer(framebuffer);
    }
}
//# sourceMappingURL=DeleteFramebuffer.js.map