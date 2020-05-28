import { DeleteShaders } from './DeleteShaders';

export function CreateProgram (gl: WebGLRenderingContext, ...shaders: WebGLShader[]): WebGLProgram
{
    const program = gl.createProgram();

    shaders.forEach(shader =>
    {
        gl.attachShader(program, shader);
    });

    gl.linkProgram(program);

    const status = gl.getProgramParameter(program, gl.LINK_STATUS);

    if (!status)
    {
        const info = gl.getProgramInfoLog(program);

        console.error(`Error linking program: ${info}`);

        gl.deleteProgram(program);

        DeleteShaders(gl, ...shaders);

        return null;
    }

    return program;
}
