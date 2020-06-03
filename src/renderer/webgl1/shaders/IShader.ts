import { IVertexAttribPointer } from './IVertexAttribPointer';
import { IWebGLRenderer } from '../IWebGLRenderer';
import { Texture } from '../../../textures/Texture';

export interface IShader
{
    attributes: Map<string, IVertexAttribPointer>;
    framebuffer: WebGLFramebuffer;
    program: WebGLProgram;
    renderer: IWebGLRenderer;
    renderToFramebuffer: boolean;
    renderToDepthbuffer: boolean;
    texture: Texture;
    uniforms: Map<string, unknown>;
    bind (uProjectionMatrix: Float32Array, uCameraMatrix: Float32Array, uTexture?: number): boolean;
    create (fragmentShaderSource: string, vertexShaderSource: string, uniforms: Object, attribs: Object): void;
    destroy (): void;
    updateUniforms (): void;
    setAttributes (stride: number): void;
    setUniforms (): boolean;
}
