import '../../../geom/rectangle/Contains.js';
import '../../../geom/rectangle/Rectangle.js';
import './AddViewport.js';
import { gl } from '../GL.js';
import './BindViewport.js';
import './SetViewport.js';
import './BindFramebuffer.js';
import './PopViewport.js';
import './PopFramebuffer.js';
import './AddFramebuffer.js';
import './SetFramebuffer.js';
import './Draw.js';
import { Flush } from './Flush.js';

function SetTexture(renderPass, texture) {
    const binding = texture.binding;
    const currentActiveTexture = renderPass.currentActiveTexture;
    if (binding.indexCounter < renderPass.startActiveTexture) {
        binding.indexCounter = renderPass.startActiveTexture;
        if (currentActiveTexture < renderPass.maxTextures) {
            binding.setIndex(currentActiveTexture);
            gl.activeTexture(gl.TEXTURE0 + currentActiveTexture);
            gl.bindTexture(gl.TEXTURE_2D, binding.texture);
            renderPass.currentActiveTexture++;
        }
        else {
            Flush(renderPass);
            renderPass.startActiveTexture++;
            binding.indexCounter = renderPass.startActiveTexture;
            binding.setIndex(1);
            gl.activeTexture(gl.TEXTURE1);
            gl.bindTexture(gl.TEXTURE_2D, binding.texture);
            renderPass.currentActiveTexture = 2;
        }
    }
    return binding.index;
}

export { SetTexture };
