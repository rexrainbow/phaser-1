import { WebGLRenderer } from './WebGLRenderer';

export let instance: WebGLRenderer;

export const WebGLRendererInstance =
{
    get: (): WebGLRenderer =>
    {
        return instance;
    },

    set: (renderer: WebGLRenderer | undefined): void =>
    {
        instance = renderer;
    }
};
