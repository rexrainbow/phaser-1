import { WebGLRenderer, Scene } from '..';
import Rectangle from '../geom/Rectangle';

export default class StaticCamera
{
    scene: Scene;
    matrix: Float32Array;
    renderer: WebGLRenderer;

    width: number;
    height: number;
    bounds: Rectangle;

    constructor (scene: Scene)
    {
        this.scene = scene;

        this.renderer = scene.game.renderer;

        this.matrix = new Float32Array([ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ]);

        this.bounds = new Rectangle();

        this.reset();
    }

    /*
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
    */

    reset ()
    {
        const width = this.renderer.width;
        const height = this.renderer.height;

        this.width = width;
        this.height = height;

        this.bounds.set(0, 0, width, height);
    }

    destroy ()
    {
        this.scene = null;
        this.renderer = null;
        this.matrix = null;
        this.bounds = null;
    }
}
