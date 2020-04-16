import Rectangle from '../geom/rectangle/Rectangle';
export default class StaticCamera {
    constructor(scene) {
        this.scene = scene;
        this.renderer = scene.game.renderer;
        this.matrix = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
        this.bounds = new Rectangle();
        this.reset();
    }
    reset() {
        const width = this.renderer.width;
        const height = this.renderer.height;
        this.width = width;
        this.height = height;
        this.bounds.set(0, 0, width, height);
    }
    destroy() {
        this.scene = null;
        this.renderer = null;
        this.matrix = null;
        this.bounds = null;
    }
}
//# sourceMappingURL=StaticCamera.js.map