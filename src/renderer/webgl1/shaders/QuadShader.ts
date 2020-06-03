import { DefaultQuadAttributes } from './DefaultQuadAttributes';
import { IShader } from './IShader';
import { IShaderConfig } from './IShaderConfig';
import { Shader } from './Shader';

export class QuadShader extends Shader implements IShader
{
    constructor (config: IShaderConfig = {})
    {
        const shaderConfig = config;

        shaderConfig.attributes = (!shaderConfig.attributes) ? DefaultQuadAttributes : shaderConfig.attributes;

        super(shaderConfig);
    }
}
