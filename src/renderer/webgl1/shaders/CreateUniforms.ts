import { CreateUniformSetter } from './CreateUniformSetter';

export function CreateUniforms (gl: WebGLRenderingContext, program: WebGLProgram): Map<string, Function>
{
    const uniforms = new Map();

    const total = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);

    for (let i = 0; i < total; i++)
    {
        const uniform = gl.getActiveUniform(program, i);

        let name = uniform.name;

        if (name.startsWith('gl_') || name.startsWith('webgl_'))
        {
            //  Skip built-in uniforms
            continue;
        }

        const location = gl.getUniformLocation(program, uniform.name);

        if (location)
        {
            let isArray = false;

            //  If uniform name has [0] at the end, remove it
            if (name.substr(-3) === '[0]')
            {
                name = name.substr(0, name.length - 3);

                isArray = (uniform.size > 1);
            }

            uniforms.set(name, CreateUniformSetter(gl, uniform, location, isArray));
        }
    }

    return uniforms;
}
