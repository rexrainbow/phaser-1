import { DefaultQuadAttributes } from './DefaultQuadAttributes';
import { IShader } from './IShader';
import { IShaderConfig } from './IShaderConfig';
import { IndexedVertexBuffer } from '../buffers/IndexedVertexBuffer';
import { Shader } from './Shader';

export class QuadShader extends Shader implements IShader
{
    buffer: IndexedVertexBuffer;

    constructor (config: IShaderConfig = {})
    {
        const shaderConfig = config;

        //  Dev can override
        shaderConfig.attributes = (!shaderConfig.attributes) ? DefaultQuadAttributes : shaderConfig.attributes;
        // shaderConfig.batchSize = (!shaderConfig.batchSize) ? 4096 : shaderConfig.batchSize;

        //  Pre-configured
        // shaderConfig.indexLayout = [ 0, 1, 2, 2, 3, 0 ];
        // shaderConfig.indexSize = 4;
        // shaderConfig.entryIndexSize = 6;

        super(shaderConfig);
    }
}
