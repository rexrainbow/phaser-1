import { BindingQueue } from '../../BindingQueue.js';
import { SetMaxTextures, GetMaxTextures } from '../../../config/MaxTextures.js';
import '../GL.js';
import './CreateGLTexture.js';
import '../fbo/DeleteFramebuffer.js';
import './DeleteGLTexture.js';
import '../../../math/pow2/IsSizePowerOfTwo.js';
import './SetGLTextureFilterMode.js';
import './UpdateGLTexture.js';
import { GLTextureBinding } from './GLTextureBinding.js';
import { CheckShaderMaxIfStatements } from '../shaders/CheckShaderMaxIfStatements.js';

class TextureSystem {
    constructor(renderer) {
        this.startActiveTexture = 0;
        this.renderer = renderer;
        this.tempTextures = [];
        this.textureIndex = [];
    }
    init() {
        const gl = this.renderer.gl;
        let maxGPUTextures = CheckShaderMaxIfStatements(gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS), gl);
        const maxConfigTextures = GetMaxTextures();
        if (maxConfigTextures === 0 || (maxConfigTextures > 0 && maxConfigTextures > maxGPUTextures)) {
            SetMaxTextures(maxGPUTextures);
        }
        else if (maxConfigTextures > 0 && maxConfigTextures < maxGPUTextures) {
            maxGPUTextures = Math.max(8, maxConfigTextures);
        }
        const tempTextures = this.tempTextures;
        if (tempTextures.length) {
            tempTextures.forEach(texture => {
                gl.deleteTexture(texture);
            });
        }
        const index = [];
        for (let texturesIndex = 0; texturesIndex < maxGPUTextures; texturesIndex++) {
            const tempTexture = gl.createTexture();
            gl.activeTexture(gl.TEXTURE0 + texturesIndex);
            gl.bindTexture(gl.TEXTURE_2D, tempTexture);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 255, 255]));
            tempTextures[texturesIndex] = tempTexture;
            index.push(texturesIndex);
        }
        this.maxTextures = maxGPUTextures;
        this.textureIndex = index;
        this.currentActiveTexture = 1;
    }
    update() {
        const queue = BindingQueue.get();
        for (let i = 0; i < queue.length; i++) {
            const texture = queue[i];
            if (!texture.binding) {
                texture.binding = new GLTextureBinding(texture);
            }
        }
        BindingQueue.clear();
    }
    reset() {
        const gl = this.renderer.gl;
        const temp = this.tempTextures;
        for (let i = 0; i < temp.length; i++) {
            gl.activeTexture(gl.TEXTURE0 + i);
            gl.bindTexture(gl.TEXTURE_2D, temp[i]);
        }
        this.currentActiveTexture = 1;
        this.startActiveTexture++;
    }
    bind(texture, index = 0) {
        const gl = this.renderer.gl;
        const binding = texture.binding;
        binding.setIndex(index);
        gl.activeTexture(gl.TEXTURE0 + index);
        gl.bindTexture(gl.TEXTURE_2D, binding.texture);
    }
    unbind(index = 0) {
        const gl = this.renderer.gl;
        gl.activeTexture(gl.TEXTURE0 + index);
        gl.bindTexture(gl.TEXTURE_2D, this.tempTextures[index]);
        if (index > 0) {
            this.startActiveTexture++;
        }
    }
    request(texture) {
        const gl = this.renderer.gl;
        const binding = texture.binding;
        const currentActiveTexture = this.currentActiveTexture;
        if (binding.indexCounter >= this.startActiveTexture) {
            return false;
        }
        binding.indexCounter = this.startActiveTexture;
        if (currentActiveTexture < this.maxTextures) {
            binding.setIndex(currentActiveTexture);
            gl.activeTexture(gl.TEXTURE0 + currentActiveTexture);
            gl.bindTexture(gl.TEXTURE_2D, binding.texture);
            this.currentActiveTexture++;
        }
        else {
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

export { TextureSystem };
