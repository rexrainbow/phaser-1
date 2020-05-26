import '../../renderer/BindingQueue.js';
import '../Frame.js';
import { Texture } from '../Texture.js';

class RenderTexture extends Texture {
    constructor(renderer, width = 256, height = width) {
        super(null, width, height);
        this.renderer = renderer;
    }
    cls() {
        const renderer = this.renderer;
        const gl = renderer.gl;
        renderer.reset(this.binding.framebuffer, this.width, this.height);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        renderer.reset();
        return this;
    }
    batchStart() {
        return this;
    }
    batchDraw(sprites) {
        const renderer = this.renderer;
        for (let i = 0, len = sprites.length; i < len; i++) {
            sprites[i].renderGL(renderer);
        }
        return this;
    }
    batchEnd() {
        const renderer = this.renderer;
        renderer.flush();
        renderer.reset();
        return this;
    }
    draw(...sprites) {
        this.batchStart();
        this.batchDraw(sprites);
        this.batchEnd();
        return this;
    }
}

export { RenderTexture };
