import { IRenderer } from '../../IRenderer';
import { IndexedBuffer } from '../buffers/IndexedBuffer';

export interface IShader
{
    gl: WebGLRenderingContext;
    program: WebGLProgram;
    maxTextures: number;
    buffer: IndexedBuffer;
    count: number;
    prevCount: number;
    createShaders (fragmentShaderSource: string, vertexShaderSource: string): void;
    bind (renderer: IRenderer, projectionMatrix: Float32Array, cameraMatrix: Float32Array): void;
    bindBuffers (indexBuffer: WebGLBuffer, vertexBuffer: WebGLBuffer): void;
    draw (count: number): void;
    flush (): boolean;
}
