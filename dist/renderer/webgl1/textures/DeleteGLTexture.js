import { gl } from '../GL.js';

function DeleteGLTexture(texture) {
    if (gl.isTexture(texture)) {
        gl.deleteTexture(texture);
    }
}

export { DeleteGLTexture };
