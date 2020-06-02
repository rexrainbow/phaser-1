import { IVertexAttribPointer } from './IVertexAttribPointer';
import { IVertexBuffer } from '../buffers/IVertexBuffer';
import { IWebGLRenderer } from '../IWebGLRenderer';
import { Texture } from '../../../textures/Texture';

export interface IShader
{
    attributes: Map<string, IVertexAttribPointer>;
    buffer: IVertexBuffer;
    count: number;
    framebuffer: WebGLFramebuffer;
    prevCount: number;
    program: WebGLProgram;
    renderer: IWebGLRenderer;
    renderToFBO: boolean;
    texture: Texture;
    uniforms: Map<string, unknown>;
    bind (uProjectionMatrix: Float32Array, uCameraMatrix: Float32Array, uTexture?: number): boolean;
    bindBuffers (): void;
    create (fragmentShaderSource: string, vertexShaderSource: string, uniforms: Object, attribs: Object): void;
    destroy (): void;
    draw (count: number): void;
    flush (): boolean;
    updateUniforms (): void;
    setBuffers (vertexBuffer: WebGLBuffer, indexBuffer?: WebGLBuffer): void;
    setUniforms (): boolean;
}
