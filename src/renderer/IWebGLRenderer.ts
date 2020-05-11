import { IRenderer } from './IRenderer';
import { IShader } from './webgl1/shaders/IShader';
import { Texture } from '../textures';

export interface IWebGLRenderer extends IRenderer
{
    currentShader: IShader;
    shaders: IShader[];
    startActiveTexture: number;
    setFramebuffer (framebuffer: WebGLFramebuffer, width?: number, height?: number): void;
    resetFramebuffer (): void;
    setShader (newShader: IShader): void;
    resetShader (): void;
    resetTextures (texture?: Texture): void;
    requestTexture (texture: Texture): void;
}
