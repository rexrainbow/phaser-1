export interface IGLTextureBindingConfig
{
    texture?: WebGLTexture;
    framebuffer?: WebGLFramebuffer;
    unpackPremultiplyAlpha?: boolean;
    minFilter?: GLenum;
    magFilter?: GLenum;
    wrapS?: GLenum;
    wrapT?: GLenum;
    flipY?: boolean;
    generateMipmap?: boolean;
}
