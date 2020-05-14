import { IShader } from './IShader';
import { IShaderConfig } from './IShaderConfig';
import { SingleTextureQuadShader } from './SingleTextureQuadShader';

export class Shader extends SingleTextureQuadShader implements IShader
{
    constructor (config: IShaderConfig = {})
    {
        super(config);
    }
}
