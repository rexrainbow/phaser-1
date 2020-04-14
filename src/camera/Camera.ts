import Transformer from '../gameobjects/Transformer';
import { WebGLRenderer, Scene } from '..';

export default class Camera extends Transformer
{
    matrix: Float32Array;
    renderer: WebGLRenderer;

    constructor (scene: Scene, x: number = 0, y: number = 0)
    {
        super(scene, x, y);

        this.setType('Camera');

        this.renderer = scene.game.renderer;

        this.reset();
    }

    updateTransform ()
    {
        if (!this.renderer)
        {
            return this;
        }

        this.dirtyRender = true;

        const lt = this.localTransform;
        const wt = this.worldTransform;

        lt[4] = 0 - this.x;
        lt[5] = 0 - this.y;

        const mat = this.matrix;
        const [ a, b, c, d, tx, ty ] = lt;

        const viewportW = this.renderer.width * this.originX;
        const viewportH = this.renderer.height * this.originY;

        mat[0] = a;
        mat[1] = b;
        mat[4] = c;
        mat[5] = d;

        //  combines viewport translation + scrollX/Y

        const worldX = (a * -viewportW) + (c * -viewportH) + (viewportW + tx);
        const worldY = (b * -viewportW) + (d * -viewportH) + (viewportH + ty);

        mat[12] = worldX;
        mat[13] = worldY;

        //  Store in worldTransform
        wt.set([
            a, b, c, d, worldX, worldY
        ]);

        // mat[12] = viewportW + tx; // combines translation to center of viewport + scrollX
        // mat[13] = viewportH + ty; // combines translation to center of viewport + scrollY
        // this.translate(-viewportW, -viewportH);
        // console.log(mat);

        this.bounds.x = worldX * -1;
        this.bounds.y = worldY * -1;

        return this;
    }

    reset ()
    {
        this.matrix = new Float32Array([ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ]);

        const width = this.renderer.width;
        const height = this.renderer.height;

        this.setSize(width, height);
        this.setBounds(0, 0, width, height);
    }

    destroy ()
    {
        super.destroy();

        this.renderer = null;
        this.matrix = null;
    }
}
