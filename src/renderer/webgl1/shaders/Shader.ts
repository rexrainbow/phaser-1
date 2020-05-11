import { IShader } from './IShader';
import { IShaderConfig } from './IShaderConfig';
import { SingleTextureQuadShader } from './SingleTextureQuadShader';
import { WebGLRenderer } from '../WebGLRenderer';

export class Shader extends SingleTextureQuadShader implements IShader
{
    renderer: WebGLRenderer;
    gl: WebGLRenderingContext;

    program: WebGLProgram;

    constructor (config: IShaderConfig = {})
    {
        super(config);
    }
}
