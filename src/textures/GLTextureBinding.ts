import { CreateGLTexture } from '../renderer/webgl1/CreateGLTexture';
import { DeleteFramebuffer } from '../renderer/webgl1/DeleteFramebuffer';
import { DeleteGLTexture } from '../renderer/webgl1/DeleteGLTexture';
import { GL } from '../renderer/webgl1/GL';
import { IGLTextureBinding } from './IGLTextureBinding';
import { IGLTextureBindingConfig } from './IGLTextureBindingConfig';
import { ITexture } from './ITexture';
import { IsSizePowerOfTwo } from '../math/pow2/IsSizePowerOfTwo';
import { SetGLTextureFilterMode } from '../renderer/webgl1/SetGLTextureFilterMode';
import { UpdateGLTexture } from '../renderer/webgl1/UpdateGLTexture';

export class GLTextureBinding implements IGLTextureBinding
{
    parent: ITexture;

    texture: WebGLTexture;
    framebuffer: WebGLFramebuffer;

    index: number = 0;
    indexCounter: number = -1;

    dirtyIndex: boolean = true;
    unpackPremultiplyAlpha: boolean = true;

    minFilter: GLenum;
    magFilter: GLenum;
    wrapS: GLenum;
    wrapT: GLenum;

    flipY: boolean = false;
    isPOT: boolean = false;
    generateMipmap: boolean = false;

    constructor (parent: ITexture, config: IGLTextureBindingConfig = {})
    {
        const gl = GL.get();

        this.parent = parent;

        this.isPOT = IsSizePowerOfTwo(parent.width, parent.height);

        const {
            texture = null,
            framebuffer = null,
            unpackPremultiplyAlpha = true,
            minFilter = gl.LINEAR,
            magFilter = gl.LINEAR,
            wrapS = gl.CLAMP_TO_EDGE,
            wrapT = gl.CLAMP_TO_EDGE,
            generateMipmap = this.isPOT,
            flipY = false
        } = config;

        this.minFilter = minFilter;
        this.magFilter = magFilter;
        this.wrapS = wrapS;
        this.wrapT = wrapT;
        this.generateMipmap = generateMipmap;
        this.flipY = flipY;
        this.unpackPremultiplyAlpha = unpackPremultiplyAlpha;

        if (framebuffer)
        {
            this.framebuffer = framebuffer;
        }

        if (texture)
        {
            this.texture = texture;
        }
        else
        {
            CreateGLTexture(this);
        }
    }

    //  Needed?
    setFilter (linear: boolean): void
    {
        if (this.texture)
        {
            SetGLTextureFilterMode(this.texture, linear);
        }
    }

    create (): WebGLTexture
    {
        const texture = this.texture;

        if (texture)
        {
            DeleteGLTexture(texture);
        }

        return CreateGLTexture(this);
    }

    update (): WebGLTexture
    {
        const texture = this.texture;

        if (!texture)
        {
            return CreateGLTexture(this);
        }
        else
        {
            return UpdateGLTexture(this);
        }
    }

    setIndex (index: number): void
    {
        this.dirtyIndex = (index !== this.index);
        this.index = index;
    }

    destroy (): void
    {
        DeleteGLTexture(this.texture);
        DeleteFramebuffer(this.framebuffer);

        this.parent = null;
        this.texture = null;
        this.framebuffer = null;
    }
}
