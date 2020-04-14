import Texture from './Texture';
import SpriteRenderWebGL from '../gameobjects/sprite/RenderWebGL';
import Ortho from '../renderer/Ortho';
import CreateFramebuffer from '../renderer/CreateFramebuffer';
export default class RenderTexture extends Texture {
    constructor(renderer, width = 256, height = width) {
        super(null, width, height);
        this.renderer = renderer;
        const [texture, framebuffer] = CreateFramebuffer(width, height);
        this.glTexture = texture;
        this.glFramebuffer = framebuffer;
        this.projectionMatrix = Ortho(width, height);
        this.cameraMatrix = new Float32Array([1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, height, 0, 1]);
    }
    cls() {
        const renderer = this.renderer;
        const gl = renderer.gl;
        renderer.reset(this.glFramebuffer, this.width, this.height);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        renderer.reset();
        return this;
    }
    batchStart() {
        const renderer = this.renderer;
        renderer.reset(this.glFramebuffer, this.width, this.height);
        renderer.shader.bind(this.projectionMatrix, this.cameraMatrix);
        return this;
    }
    batchDraw(...sprites) {
        const renderer = this.renderer;
        const shader = renderer.shader;
        for (let i = 0; i < sprites.length; i++) {
            SpriteRenderWebGL(sprites[i], renderer, shader, renderer.startActiveTexture);
        }
        return this;
    }
    batchEnd() {
        const renderer = this.renderer;
        const shader = renderer.shader;
        shader.flush();
        renderer.reset();
        return this;
    }
    draw(...sprites) {
        this.batchStart();
        this.batchDraw(...sprites);
        this.batchEnd();
        return this;
    }
}
//# sourceMappingURL=RenderTexture.js.map