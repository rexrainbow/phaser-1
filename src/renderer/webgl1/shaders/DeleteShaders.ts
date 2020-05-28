export function DeleteShaders (gl: WebGLRenderingContext, ...shaders: WebGLShader[]): void
{
    shaders.forEach(shader =>
    {
        gl.deleteShader(shader);
    });
}
