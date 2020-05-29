import { IDefaultAttribs } from './IDefaultAttribs';
import { IShaderConfig } from './IShaderConfig';
import { ISingleTextureQuadShaderUniforms } from './ISingleTextureQuadShaderUniforms';
import { Shader } from './Shader';

export class SingleTextureQuadShader extends Shader
{
    attributes: IDefaultAttribs;
    uniforms: ISingleTextureQuadShaderUniforms;

    constructor (config: IShaderConfig = {})
    {
        super(config);
    }
}
