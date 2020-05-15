export type IShaderConfig = {
    maxTextures?: number;
    batchSize?: number;
    dataSize?: number;
    indexSize?: number;
    vertexElementSize?: number;
    quadIndexSize?: number;
    fragmentShader?: string;
    vertexShader?: string;
    width?: number;
    height?: number;
    resolution?: number;
    renderToFBO?: boolean;
};
