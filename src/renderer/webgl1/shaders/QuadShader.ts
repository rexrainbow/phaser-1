import { DefaultQuadAttributes } from './DefaultQuadAttributes';
import { IRenderPass } from '../renderpass/IRenderPass';
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

    bind (renderPass: IRenderPass): boolean
    {
        const uniforms = this.uniforms;

        uniforms.set('uProjectionMatrix', renderPass.projectionMatrix);
        uniforms.set('uCameraMatrix', renderPass.cameraMatrix);

        return super.bind(renderPass);
    }
}
