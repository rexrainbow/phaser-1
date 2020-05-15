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
    createShaders (fragmentShaderSource: string, vertexShaderSource: string): void;
    bind (projectionMatrix: Float32Array, cameraMatrix: Float32Array, textureID?: number): void;
    bindBuffers (indexBuffer: WebGLBuffer, vertexBuffer: WebGLBuffer): void;
    draw (count: number): void;
    flush (): boolean;
}
