import { IRenderer } from '../IRenderer';
import { IShader } from './shaders/IShader';
import { TextureSystem } from './textures/TextureSystem';

export interface IWebGLRenderer extends IRenderer
{
    gl: WebGLRenderingContext;

    textures: TextureSystem;

    currentShader: IShader;
    shaders: IShader[];

    flushTotal: number;

    contextLost: boolean;

    onContextLost (event: Event): void;
    onContextRestored (): void;
    reset (framebuffer?: WebGLFramebuffer, width?: number, height?: number): void;
    setFramebuffer (framebuffer: WebGLFramebuffer, clear?: boolean, width?: number, height?: number): void;
    resetFramebuffer (): void;
    setShader (newShader: IShader): IShader;
    resetShader (): void;
    // resetTextures (texture?: Texture): void;
    // requestTexture (texture: Texture): void;
}
