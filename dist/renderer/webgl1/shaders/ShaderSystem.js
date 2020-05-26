import '../../../config/Size.js';
import '../../BindingQueue.js';
import '../GL.js';
import '../fbo/CreateFramebuffer.js';
import '../textures/CreateGLTexture.js';
import '../fbo/DeleteFramebuffer.js';
import '../textures/DeleteGLTexture.js';
import '../../../math/pow2/IsSizePowerOfTwo.js';
import '../textures/SetGLTextureFilterMode.js';
import '../textures/UpdateGLTexture.js';
import '../textures/GLTextureBinding.js';
import '../buffers/IndexedBuffer.js';
import '../../../textures/Frame.js';
import '../../../textures/Texture.js';
import '../WebGLRendererInstance.js';
import { SingleTextureQuadShader } from './SingleTextureQuadShader.js';

class ShaderSystem {
    constructor(renderer, currentShader) {
        this.renderer = renderer;
        const stackEntry = {
            shader: new currentShader()
        };
        this.stack = [stackEntry];
        this.currentEntry = stackEntry;
        this.current = stackEntry.shader;
        this.singleQuadShader = new SingleTextureQuadShader();
    }
    add(shader, textureID) {
        const stackEntry = { shader, textureID };
        this.stack.push(stackEntry);
        return stackEntry;
    }
    set(shader, textureID) {
        this.flush();
        const renderer = this.renderer;
        const projectionMatrix = renderer.projectionMatrix;
        const cameraMatrix = renderer.currentCamera.matrix;
        const success = shader.bind(projectionMatrix, cameraMatrix, textureID);
        if (success) {
            const entry = this.add(shader, textureID);
            this.currentEntry = entry;
            this.current = shader;
        }
        return success;
    }
    setDefault(textureID) {
        this.set(this.singleQuadShader, textureID);
    }
    pop() {
        this.flush();
        const stack = this.stack;
        if (stack.length > 1) {
            stack.pop();
        }
        this.currentEntry = stack[stack.length - 1];
        this.current = this.currentEntry.shader;
    }
    reset() {
        this.pop();
        this.rebind();
    }
    flush() {
        if (this.current.flush()) {
            this.renderer.flushTotal++;
            return true;
        }
        return false;
    }
    rebind() {
        const renderer = this.renderer;
        const projectionMatrix = renderer.projectionMatrix;
        const cameraMatrix = renderer.currentCamera.matrix;
        const current = this.currentEntry;
        current.shader.bind(projectionMatrix, cameraMatrix, current.textureID);
    }
    popAndRebind() {
        this.pop();
        this.rebind();
    }
    clear() {
    }
    destroy() {
    }
}

export { ShaderSystem };
