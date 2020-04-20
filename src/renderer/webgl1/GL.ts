let gl: WebGLRenderingContext;

export const GL = {
    get: () => {

        return gl;

    },

    set: (context: WebGLRenderingContext) => {

        gl = context;

    }
}
