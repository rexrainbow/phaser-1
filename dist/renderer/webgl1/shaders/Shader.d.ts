import { IRenderPass } from '../renderpass/IRenderPass';
import { IShader } from './IShader';
import { IShaderConfig } from './IShaderConfig';
import { IVertexAttribPointer } from './IVertexAttribPointer';
import { Texture } from '../../../textures/Texture';
export declare class Shader implements IShader {
    program: WebGLProgram;
    attributes: Map<string, IVertexAttribPointer>;
    uniforms: Map<string, unknown>;
    uniformSetters: Map<string, Function>;
    texture: Texture;
    framebuffer: WebGLFramebuffer;
    renderToFramebuffer: boolean;
    renderToDepthbuffer: boolean;
    constructor(config?: IShaderConfig);
    fromConfig(config: IShaderConfig): void;
    create(fragmentShaderSource: string, vertexShaderSource: string, uniforms: {}, attribs: {}): void;
    updateUniforms(renderPass: IRenderPass): void;
    bind(renderPass: IRenderPass): boolean;
    setUniform(key: string, value: unknown): void;
    setUniforms(renderPass: IRenderPass): boolean;
    setAttributes(renderPass: IRenderPass): void;
    destroy(): void;
}
//# sourceMappingURL=Shader.d.ts.map