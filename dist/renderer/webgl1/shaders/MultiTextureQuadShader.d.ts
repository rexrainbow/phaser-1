import { IRenderPass } from '../renderpass/IRenderPass';
import { IShaderConfig } from './IShaderConfig';
import { QuadShader } from './QuadShader';
export declare class MultiTextureQuadShader extends QuadShader {
    constructor(config?: IShaderConfig);
    create(fragmentShaderSource: string, vertexShaderSource: string, uniforms: {}, attribs: {}): void;
    bind(renderPass: IRenderPass): boolean;
}
//# sourceMappingURL=MultiTextureQuadShader.d.ts.map