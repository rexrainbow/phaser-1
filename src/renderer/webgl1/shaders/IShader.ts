import { IVertexAttribPointer } from './IVertexAttribPointer';
import { IWebGLRenderer } from '../IWebGLRenderer';
import { IndexedBuffer } from '../buffers/IndexedBuffer';
import { Texture } from '../../../textures/Texture';

export interface IShader
{
    attributes: Map<string, IVertexAttribPointer>;
    buffer: IndexedBuffer;
    count: number;
    framebuffer: WebGLFramebuffer;
    prevCount: number;
    program: WebGLProgram;
    renderer: IWebGLRenderer;
    renderToFBO: boolean;
    texture: Texture;
    uniforms: Map<string, unknown>;
    bind (uProjectionMatrix: Float32Array, uCameraMatrix: Float32Array, uTexture?: number): boolean;
    bindBuffers (indexBuffer: WebGLBuffer, vertexBuffer: WebGLBuffer): void;
    create (fragmentShaderSource: string, vertexShaderSource: string, uniforms: Object, attribs: Object): void;
    destroy (): void;
    draw (count: number): void;
    flush (): boolean;
    updateUniforms (): boolean;
}
