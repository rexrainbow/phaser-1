import { GLTextureBinding, Texture } from '../../../textures';
import { GetMaxTextures, SetMaxTextures } from '../../../config';

import { BindingQueue } from '../../BindingQueue';
import { CheckShaderMaxIfStatements } from '../shaders';
import { GL } from '../GL';
import { IWebGLRenderer } from '../IWebGLRenderer';

export class TextureSystem
{
    maxTextures: number;
    activeTextures: Texture[];
    currentActiveTexture: number;
    startActiveTexture: number;
    tempTextures: WebGLTexture[];
    textureIndex: number[];

    constructor ()
    {
        this.tempTextures = [];
        this.textureIndex = [];
    }

    //  As per the WebGL spec, the browser should always support at least 8 texture units
    init (): void
    {
        const gl = GL.get();

        let maxGPUTextures: number = CheckShaderMaxIfStatements(gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS), gl);

        const maxConfigTextures = GetMaxTextures();

        if (maxConfigTextures === 0 || (maxConfigTextures > 0 && maxConfigTextures > maxGPUTextures))
        {
            //  Insert gpu limit into config value
            SetMaxTextures(maxGPUTextures);
        }
        else if (maxConfigTextures > 0 && maxConfigTextures < maxGPUTextures)
        {
            //  Limit to config setting, or 8, whichever is higher
            maxGPUTextures = Math.max(8, maxConfigTextures);
        }

        const tempTextures = this.tempTextures;

        if (tempTextures.length)
        {
            tempTextures.forEach(texture =>
            {
                gl.deleteTexture(texture);
            });
        }

        //  Create temp textures to stop WebGL errors on mac os
        for (let texturesIndex: number = 0; texturesIndex < maxGPUTextures; texturesIndex++)
        {
            const tempTexture = gl.createTexture();

            gl.activeTexture(gl.TEXTURE0 + texturesIndex);

            gl.bindTexture(gl.TEXTURE_2D, tempTexture);

            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([ 0, 0, 255, 255 ]));

            tempTextures[texturesIndex] = tempTexture;
        }

        this.maxTextures = maxGPUTextures;

        this.textureIndex = Array.from(Array(maxGPUTextures).keys());

        this.activeTextures = Array(maxGPUTextures);
    }

    reset (): void
    {
        this.currentActiveTexture = 0;

        this.startActiveTexture++;

        this.processBindingQueue();
    }

    private processBindingQueue (): void
    {
        const queue = BindingQueue.get();

        for (let i = 0; i < queue.length; i++)
        {
            const texture = queue[i];

            if (!texture.binding)
            {
                texture.binding = new GLTextureBinding(texture);
            }
        }

        BindingQueue.clear();
    }

    clear (renderer: IWebGLRenderer, texture?: Texture): void
    {
        const gl = renderer.gl;
        const active = this.activeTextures;

        active.fill(null);

        this.currentActiveTexture = 0;
        this.startActiveTexture++;

        if (texture)
        {
            //  Set this texture as texture0
            active[0] = texture;

            const binding = texture.binding;

            binding.setIndex(0);

            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, binding.texture);

            this.currentActiveTexture = 1;
        }
    }

    request (renderer: IWebGLRenderer, texture: Texture): void
    {
        const gl = renderer.gl;
        const binding = texture.binding;

        binding.indexCounter = this.startActiveTexture;

        if (this.currentActiveTexture < renderer.currentShader.maxTextures)
        {
            //  Make this texture active
            this.activeTextures[this.currentActiveTexture] = texture;

            binding.setIndex(this.currentActiveTexture);

            gl.activeTexture(gl.TEXTURE0 + this.currentActiveTexture);
            gl.bindTexture(gl.TEXTURE_2D, binding.texture);

            this.currentActiveTexture++;
        }
        else
        {
            //  We're out of textures, so flush the batch and reset them all
            renderer.currentShader.flush(renderer);

            this.clear(renderer, texture);
        }
    }
}
