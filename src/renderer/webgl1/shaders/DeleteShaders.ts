import { GL } from '../GL';

export function DeleteShaders (...shaders: WebGLShader[]): void
{
    const gl = GL.get();

    shaders.forEach(shader =>
    {
        gl.deleteShader(shader);
    });
}
