export let instance;
export const WebGLRendererInstance = {
  get: () => {
    return instance;
  },
  set: (renderer) => {
    instance = renderer;
  }
};
