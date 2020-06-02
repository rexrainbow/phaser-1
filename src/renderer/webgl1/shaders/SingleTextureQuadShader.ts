import { IShaderConfig } from './IShaderConfig';
import { QuadShader } from './QuadShader';

export class SingleTextureQuadShader extends QuadShader
{
    constructor (config: IShaderConfig = {})
    {
        super(config);
    }
}
