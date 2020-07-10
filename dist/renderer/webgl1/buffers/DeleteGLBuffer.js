import { gl } from '../GL.js';

function DeleteGLBuffer(buffer) {
    if (gl.isBuffer(buffer)) {
        gl.deleteBuffer(buffer);
    }
}

export { DeleteGLBuffer };
