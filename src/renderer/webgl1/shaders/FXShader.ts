import { DefaultQuadAttributes } from './DefaultQuadAttributes';
import { IShader } from './IShader';
import { IShaderConfig } from './IShaderConfig';
import { Shader } from './Shader';

//  A Quad Shader with built in uTime and uResolution uniforms

export class FXShader extends Shader implements IShader
{
    constructor (config: IShaderConfig = {})
    {
        const shaderConfig = config;

        shaderConfig.attributes = (!shaderConfig.attributes) ? DefaultQuadAttributes : shaderConfig.attributes;

        shaderConfig.renderToFramebuffer = true;

        super(shaderConfig);
    }

    bind (uProjectionMatrix: Float32Array, uCameraMatrix: Float32Array): boolean
    {
        const renderer = this.renderer;

        this.uniforms.set('uTime', performance.now());
        this.uniforms.set('uResolution', [ renderer.width, renderer.height ]);

        return super.bind(uProjectionMatrix, uCameraMatrix);
    }
}
