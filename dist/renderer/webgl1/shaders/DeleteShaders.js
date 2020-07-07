import { gl } from '../GL.js';

function DeleteShaders(...shaders) {
    shaders.forEach(shader => {
        gl.deleteShader(shader);
    });
}

export { DeleteShaders };
