import { IShader } from './IShader';
import { IShaderConfig } from './IShaderConfig';
import { SingleTextureQuadShader } from './SingleTextureQuadShader';
export declare class MultiTextureQuadShader extends SingleTextureQuadShader implements IShader {
    constructor(config?: IShaderConfig);
    createShaders(fragmentShaderSource: string, vertexShaderSource: string): void;
    bind(projectionMatrix: Float32Array, cameraMatrix: Float32Array): boolean;
}
//# sourceMappingURL=MultiTextureQuadShader.d.ts.map