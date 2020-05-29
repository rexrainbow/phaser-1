export type IShaderConfig = {
    attributes?: Object;
    batchSize?: number;
    dataSize?: number;
    entryIndexSize?: number;
    fragmentShader?: string;
    height?: number;
    indexLayout?: number[];
    indexSize?: number;
    maxTextures?: number;
    quadIndexSize?: number;
    quantity?: number;
    renderToFBO?: boolean;
    resolution?: number;
    uniforms?: Object;
    vertexElementSize?: number;
    vertexShader?: string;
    width?: number;
};
