import { IRenderer } from '../IRenderer';
import { IShader } from './shaders/IShader';
import { Texture } from '../../textures';

export interface IWebGLRenderer extends IRenderer
{
    textureIndex: number[];
    flushTotal: number;
    currentShader: IShader;
    shaders: IShader[];
    startActiveTexture: number;
    onContextLost (event: Event): void;
    onContextRestored (): void;
    reset (framebuffer?: WebGLFramebuffer, width?: number, height?: number): void;
    setFramebuffer (framebuffer: WebGLFramebuffer, clear?: boolean, width?: number, height?: number): void;
    resetFramebuffer (): void;
    setShader (newShader: IShader): IShader;
    resetShader (): void;
    resetTextures (texture?: Texture): void;
    requestTexture (texture: Texture): void;
}
