export type IShaderConfig = {
    attributes?: Object;
    fragmentShader?: string;
    height?: number;
    maxTextures?: number;
    renderToFramebuffer?: boolean;
    renderToDepthbuffer?: boolean;
    resolution?: number;
    uniforms?: Object;
    vertexShader?: string;
    width?: number;
};
