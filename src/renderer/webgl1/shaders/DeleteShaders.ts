import { gl } from '../GL';

export function DeleteShaders (...shaders: WebGLShader[]): void
{
    shaders.forEach(shader =>
    {
        gl.deleteShader(shader);
    });
}
