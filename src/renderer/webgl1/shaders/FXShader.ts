import { DefaultQuadAttributes } from './DefaultQuadAttributes';
import { IRenderPass } from '../renderpass/IRenderPass';
import { IShader } from './IShader';
import { IShaderConfig } from './IShaderConfig';
import { QuadShader } from './QuadShader';

//  A Quad Shader with built in uTime and uResolution uniforms

export class FXShader extends QuadShader implements IShader
{
    constructor (config: IShaderConfig = {})
    {
        const shaderConfig = config;

        shaderConfig.attributes = (!shaderConfig.attributes) ? DefaultQuadAttributes : shaderConfig.attributes;

        shaderConfig.renderToFramebuffer = true;

        super(shaderConfig);
    }

    bind (renderPass: IRenderPass): boolean
    {
        const renderer = renderPass.renderer;

        this.uniforms.set('uTime', performance.now());
        this.uniforms.set('uResolution', [ renderer.width, renderer.height ]);

        return super.bind(renderPass);
    }
}
