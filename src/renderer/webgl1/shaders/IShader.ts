import { IWebGLRenderer } from '../IWebGLRenderer';
import { IndexedBuffer } from '../buffers/IndexedBuffer';
import { Texture } from '../../../textures/Texture';

export interface IShader
{
    renderer: IWebGLRenderer;
    program: WebGLProgram;
    buffer: IndexedBuffer;
    count: number;
    prevCount: number;
    texture: Texture;
    framebuffer: WebGLFramebuffer;
    renderToFBO: boolean;
    create (fragmentShaderSource: string, vertexShaderSource: string): void;
    bind (uProjectionMatrix: Float32Array, uCameraMatrix: Float32Array, uTexture?: number): boolean;
    bindBuffers (indexBuffer: WebGLBuffer, vertexBuffer: WebGLBuffer): void;
    setUniforms (): boolean;
    draw (count: number): void;
    flush (): boolean;
}
