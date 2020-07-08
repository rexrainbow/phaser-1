import { IGLTextureBinding } from './IGLTextureBinding';
import { IGLTextureBindingConfig } from './IGLTextureBindingConfig';
import { ITexture } from '../../../textures/ITexture';
export declare class GLTextureBinding implements IGLTextureBinding {
    parent: ITexture;
    texture: WebGLTexture;
    framebuffer: WebGLFramebuffer;
    depthbuffer: WebGLRenderbuffer;
    index: number;
    indexCounter: number;
    dirtyIndex: boolean;
    unpackPremultiplyAlpha: boolean;
    minFilter: GLenum;
    magFilter: GLenum;
    wrapS: GLenum;
    wrapT: GLenum;
    flipY: boolean;
    isPOT: boolean;
    generateMipmap: boolean;
    constructor(parent: ITexture, config?: IGLTextureBindingConfig);
    setFilter(linear: boolean): void;
    create(): WebGLTexture;
    update(): WebGLTexture;
    setIndex(index: number): void;
    destroy(): void;
}
//# sourceMappingURL=GLTextureBinding.d.ts.map