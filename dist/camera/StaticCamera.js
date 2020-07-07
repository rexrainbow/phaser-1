import { GameInstance } from '../GameInstance.js';
import '../utils/base64/Base64ToArrayBuffer.js';
import '../utils/NOOP.js';
import '../math/mat4/Matrix4.js';
import { Identity } from '../math/mat4/Identity.js';
import { Matrix2D } from '../math/matrix2d/Matrix2D.js';
import '../geom/rectangle/Contains.js';
import { Rectangle } from '../geom/rectangle/Rectangle.js';

class StaticCamera {
    constructor() {
        this.type = 'StaticCamera';
        this.dirtyRender = true;
        const game = GameInstance.get();
        this.renderer = game.renderer;
        this.matrix = Identity();
        this.bounds = new Rectangle();
        this.worldTransform = new Matrix2D();
        this.reset();
    }
    reset() {
        const renderer = this.renderer;
        if (renderer) {
            const width = renderer.width;
            const height = renderer.height;
            this.width = width;
            this.height = height;
        }
        this.bounds.set(0, 0, this.width, this.height);
    }
    destroy() {
        this.world = null;
        this.worldTransform = null;
        this.renderer = null;
        this.matrix = null;
        this.bounds = null;
    }
}

export { StaticCamera };
