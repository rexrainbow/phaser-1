import {GameInstance as GameInstance2} from "../GameInstance";
import {Identity} from "../math/mat4";
import {Matrix2D as Matrix2D2} from "../math/matrix2d/Matrix2D";
import {Rectangle as Rectangle2} from "../geom/rectangle/Rectangle";
export class StaticCamera {
  constructor() {
    this.type = "StaticCamera";
    this.dirtyRender = true;
    const game = GameInstance2.get();
    this.renderer = game.renderer;
    this.matrix = Identity();
    this.bounds = new Rectangle2();
    this.worldTransform = new Matrix2D2();
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
