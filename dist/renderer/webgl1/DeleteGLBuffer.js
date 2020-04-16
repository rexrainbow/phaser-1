import GL from './GL';
export default function DeleteGLBuffer(buffer) {
    const gl = GL.get();
    if (gl.isBuffer(buffer)) {
        gl.deleteBuffer(buffer);
    }
}
//# sourceMappingURL=DeleteGLBuffer.js.map