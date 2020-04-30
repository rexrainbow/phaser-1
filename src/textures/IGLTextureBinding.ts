import { ITexture } from './ITexture';

export interface IGLTextureBinding
{
    parent: ITexture;
    texture: WebGLTexture;
    framebuffer: WebGLFramebuffer;
    index: number;
    indexCounter: number;
    unpackPremultiplyAlpha: boolean;
    minFilter: GLenum;
    magFilter: GLenum;
    wrapS: GLenum;
    wrapT: GLenum;
    flipY: boolean;
    isPOT: boolean;
    generateMipmap: boolean;
    setFilter (linear: boolean): void;
    create (): WebGLTexture;
    update (): WebGLTexture;
    destroy (): void;
}
