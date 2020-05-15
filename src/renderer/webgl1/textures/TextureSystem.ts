import { GetMaxTextures, SetMaxTextures } from '../../../config/MaxTextures';

import { BindingQueue } from '../../BindingQueue';
import { CheckShaderMaxIfStatements } from '../shaders/CheckShaderMaxIfStatements';
import { GLTextureBinding } from './GLTextureBinding';
import { IWebGLRenderer } from '../IWebGLRenderer';
import { Texture } from '../../../textures/Texture';

export class TextureSystem
{
    renderer: IWebGLRenderer;

    //  The maximum number of combined image units the GPU supports
    //  Accordingly to the WebGL spec the minimum is 8
    maxTextures: number;

    currentActiveTexture: number;

    startActiveTexture: number = 0;

    tempTextures: WebGLTexture[];

    textureIndex: number[];

    constructor (renderer: IWebGLRenderer)
    {
        this.renderer = renderer;

        this.tempTextures = [];
        this.textureIndex = [];
    }

    //  As per the WebGL spec, the browser should always support at least 8 texture units
    init (): void
    {
        const gl = this.renderer.gl;

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

        const index = [];

        //  Create temp textures to stop WebGL errors on mac os
        for (let texturesIndex: number = 0; texturesIndex < maxGPUTextures; texturesIndex++)
        {
            const tempTexture = gl.createTexture();

            gl.activeTexture(gl.TEXTURE0 + texturesIndex);

            gl.bindTexture(gl.TEXTURE_2D, tempTexture);

            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([ 0, 0, 255, 255 ]));

            tempTextures[texturesIndex] = tempTexture;

            index.push(texturesIndex);
        }

        this.maxTextures = maxGPUTextures;

        this.textureIndex = index;

        //  Zero is reserved for FBO textures
        this.currentActiveTexture = 1;
    }

    update (): void
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

    clear (): void
    {
        this.currentActiveTexture = 1;

        this.startActiveTexture++;
    }

    bindFBOTexture (texture: Texture): void
    {
        const gl = this.renderer.gl;
        const binding = texture.binding;

        binding.setIndex(0);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, binding.texture);
    }

    unbindFBOTexture (): void
    {
        const gl = this.renderer.gl;

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, this.tempTextures[0]);
    }

    //  returns true if the texture was assigned a new index, otherwise false
    request (texture: Texture): boolean
    {
        const gl = this.renderer.gl;
        const binding = texture.binding;
        const currentActiveTexture = this.currentActiveTexture;

        if (binding.indexCounter >= this.startActiveTexture)
        {
            //  This texture was already bound this step, so we're good to go

            return false;
        }

        binding.indexCounter = this.startActiveTexture;

        if (currentActiveTexture < this.maxTextures)
        {
            binding.setIndex(currentActiveTexture);

            gl.activeTexture(gl.TEXTURE0 + currentActiveTexture);
            gl.bindTexture(gl.TEXTURE_2D, binding.texture);

            this.currentActiveTexture++;
        }
        else
        {
            //  We're out of textures, so flush the batch and reset back to 1
            this.renderer.flush();

            this.startActiveTexture++;

            binding.indexCounter = this.startActiveTexture;

            binding.setIndex(1);

            gl.activeTexture(gl.TEXTURE1);
            gl.bindTexture(gl.TEXTURE_2D, binding.texture);

            this.currentActiveTexture = 2;
        }

        return true;
    }
}
