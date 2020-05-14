import { FBOSystem } from './fbo/FBOSystem';
import { IRenderer } from '../IRenderer';
import { IShader } from './shaders/IShader';
import { TextureSystem } from './textures/TextureSystem';

export interface IWebGLRenderer extends IRenderer
{
    gl: WebGLRenderingContext;

    fbo: FBOSystem;
    textures: TextureSystem;

    currentShader: IShader;
    shaders: IShader[];

    flushTotal: number;

    contextLost: boolean;

    onContextLost (event: Event): void;
    onContextRestored (): void;
    reset (framebuffer?: WebGLFramebuffer, width?: number, height?: number): void;
    setShader (newShader: IShader): IShader;
    resetShader (): void;
    flush (): void;
}
