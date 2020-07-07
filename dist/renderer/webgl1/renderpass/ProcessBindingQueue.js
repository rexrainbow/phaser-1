import '../../../math/pow2/IsSizePowerOfTwo.js';
import { BindingQueue } from '../../BindingQueue.js';
import '../GL.js';
import '../textures/CreateGLTexture.js';
import '../fbo/DeleteFramebuffer.js';
import '../textures/DeleteGLTexture.js';
import '../textures/SetGLTextureFilterMode.js';
import '../textures/UpdateGLTexture.js';
import { GLTextureBinding } from '../textures/GLTextureBinding.js';

function ProcessBindingQueue() {
    const queue = BindingQueue.get();
    queue.forEach(entry => {
        const { texture, glConfig } = entry;
        if (!texture.binding) {
            texture.binding = new GLTextureBinding(texture, glConfig);
        }
    });
    BindingQueue.clear();
}

export { ProcessBindingQueue };
