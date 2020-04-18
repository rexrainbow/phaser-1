import Rectangle from '../geom/rectangle/Rectangle';
import WebGLRenderer from '../renderer/webgl1/WebGLRenderer';
import IBaseScene from '../scenes/IBaseScene';
import IBaseCamera from './IBaseCamera';

export default class StaticCamera implements IBaseCamera
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

    update (delta: number, time: number): void {
        // TODO
    }

    render (gameFrame: number): void {
        // TODO
    }

    destroy ()
    {
        this.scene = null;
        this.renderer = null;
        this.matrix = null;
        this.bounds = null;
    }
}
