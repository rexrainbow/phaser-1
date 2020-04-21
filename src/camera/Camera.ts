import { GameInstance } from '../GameInstance';
import { TransformGameObject } from '../gameobjects/transformgameobject/TransformGameObject';
import { WebGLRenderer } from '../renderer/webgl1/WebGLRenderer';
import { ICamera } from './ICamera';

export class Camera extends TransformGameObject implements ICamera
{
    matrix: Float32Array;
    renderer: WebGLRenderer;

    constructor (x: number = 0, y: number = 0)
    {
        super(x, y);

        this.type = 'Camera';

        const game = GameInstance.get();

        this.renderer = game.renderer;

        this.reset();
    }

    updateTransform (): this
    {
        if (!this.renderer)
        {
            return this;
        }

        this.dirtyRender = true;

        const lt = this.localTransform;
        const wt = this.worldTransform;

        lt.tx = 0 - this.x;
        lt.ty = 0 - this.y;

        const mat = this.matrix;
        const { a, b, c, d, tx, ty } = lt;

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
        wt.set(
            a, b, c, d, worldX, worldY
        );

        // mat[12] = viewportW + tx; // combines translation to center of viewport + scrollX
        // mat[13] = viewportH + ty; // combines translation to center of viewport + scrollY
        // this.translate(-viewportW, -viewportH);
        // console.log(mat);

        this.bounds.x = worldX * -1;
        this.bounds.y = worldY * -1;

        return this;
    }

    reset (): void
    {
        this.matrix = new Float32Array([ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ]);

        const width = this.renderer.width;
        const height = this.renderer.height;

        this.setSize(width, height);
        this.setBounds(0, 0, width, height);
    }

    destroy (): void
    {
        super.destroy();

        this.renderer = null;
        this.matrix = null;
    }
}
