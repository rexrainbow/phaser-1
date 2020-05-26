import { IShader } from './IShader';
import { IShaderAttributes } from './IShaderAttributes';
import { IShaderConfig } from './IShaderConfig';
import { IShaderUniforms } from './IShaderUniforms';
import { IWebGLRenderer } from '../IWebGLRenderer';
import { IndexedBuffer } from '../buffers/IndexedBuffer';
import { Texture } from '../../../textures/Texture';
export declare class SingleTextureQuadShader implements IShader {
    renderer: IWebGLRenderer;
    program: WebGLProgram;
    attribs: IShaderAttributes;
    uniforms: IShaderUniforms;
    buffer: IndexedBuffer;
    count: number;
    prevCount: number;
    texture: Texture;
    framebuffer: WebGLFramebuffer;
    renderToFBO: boolean;
    constructor(config?: IShaderConfig);
    createShaders(fragmentShaderSource: string, vertexShaderSource: string): void;
    bind(projectionMatrix: Float32Array, cameraMatrix: Float32Array, textureID: number): boolean;
    bindBuffers(indexBuffer: WebGLBuffer, vertexBuffer: WebGLBuffer): void;
    draw(count: number): void;
    flush(): boolean;
}
//# sourceMappingURL=SingleTextureQuadShader.d.ts.map