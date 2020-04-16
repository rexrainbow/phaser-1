import GL from './GL';
export default function DeleteGLTexture(texture) {
    const gl = GL.get();
    if (gl.isTexture(texture)) {
        gl.deleteTexture(texture);
    }
}
//# sourceMappingURL=DeleteGLTexture.js.map