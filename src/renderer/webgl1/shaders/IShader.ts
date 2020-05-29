import { IWebGLRenderer } from '../IWebGLRenderer';
import { IndexedBuffer } from '../buffers/IndexedBuffer';
import { Texture } from '../../../textures/Texture';

export interface IShader
{
    attributes: Object;
    buffer: IndexedBuffer;
    count: number;
    framebuffer: WebGLFramebuffer;
    prevCount: number;
    program: WebGLProgram;
    renderer: IWebGLRenderer;
    renderToFBO: boolean;
    texture: Texture;
    uniforms: Object;

    bind (uProjectionMatrix: Float32Array, uCameraMatrix: Float32Array, uTexture?: number): boolean;
    bindBuffers (indexBuffer: WebGLBuffer, vertexBuffer: WebGLBuffer): void;
    create (fragmentShaderSource: string, vertexShaderSource: string): void;
    draw (count: number): void;
    flush (): boolean;
    setUniforms (): boolean;
}
