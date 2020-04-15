import WebGLRenderer from '../renderer/webgl1/WebGLRenderer';
import Rectangle from '../geom/Rectangle';
import IBaseScene from '../scenes/IBaseScene';

export default class StaticCamera
{
    scene: IBaseScene;
    matrix: Float32Array;
    renderer: WebGLRenderer;

    width: number;
    height: number;
    bounds: Rectangle;

    constructor (scene: IBaseScene)
    {
        this.scene = scene;

        this.renderer = scene.game.renderer;

        this.matrix = new Float32Array([ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ]);

        this.bounds = new Rectangle();

        this.reset();
    }

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
