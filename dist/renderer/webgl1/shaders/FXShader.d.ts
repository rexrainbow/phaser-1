import { IRenderPass } from '../renderpass/IRenderPass';
import { IShader } from './IShader';
import { IShaderConfig } from './IShaderConfig';
import { QuadShader } from './QuadShader';
export declare class FXShader extends QuadShader implements IShader {
    constructor(config?: IShaderConfig);
    bind(renderPass: IRenderPass): boolean;
}
//# sourceMappingURL=FXShader.d.ts.map