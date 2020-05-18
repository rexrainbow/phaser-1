import { FBOSystem } from './fbo/FBOSystem';
import { IBaseCamera } from '../../camera/IBaseCamera';
import { IRenderer } from '../IRenderer';
import { ShaderSystem } from './shaders/ShaderSystem';
import { TextureSystem } from './textures/TextureSystem';

export interface IWebGLRenderer extends IRenderer
{
    gl: WebGLRenderingContext;

    fbo: FBOSystem;
    textures: TextureSystem;
    shaders: ShaderSystem;

    projectionMatrix: Float32Array;
    flushTotal: number;
    contextLost: boolean;
    currentCamera: IBaseCamera;

    onContextLost (event: Event): void;
    onContextRestored (): void;
    reset (framebuffer?: WebGLFramebuffer, width?: number, height?: number): void;
    flush (): void;
}
