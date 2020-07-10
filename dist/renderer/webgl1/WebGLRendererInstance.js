let instance;
const WebGLRendererInstance = {
    get: () => {
        return instance;
    },
    set: (renderer) => {
        instance = renderer;
    }
};

export { WebGLRendererInstance, instance };
