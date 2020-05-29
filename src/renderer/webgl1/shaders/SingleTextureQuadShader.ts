import { IShaderConfig } from './IShaderConfig';
import { Shader } from './Shader';

export class SingleTextureQuadShader extends Shader
{
    constructor (config: IShaderConfig = {})
    {
        super(config);
    }
}
