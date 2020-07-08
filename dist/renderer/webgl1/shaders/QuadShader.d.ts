import { IRenderPass } from '../renderpass/IRenderPass';
import { IShader } from './IShader';
import { IShaderConfig } from './IShaderConfig';
import { Shader } from './Shader';
export declare class QuadShader extends Shader implements IShader {
    constructor(config?: IShaderConfig);
    bind(renderPass: IRenderPass): boolean;
}
//# sourceMappingURL=QuadShader.d.ts.map