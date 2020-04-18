import Rectangle from '../geom/rectangle/Rectangle';
import WebGLRenderer from '../renderer/webgl1/WebGLRenderer';
import IBaseScene from '../scenes/IBaseScene';

export default interface IStaticCamera
{
    scene: IBaseScene;
    matrix: Float32Array;
    renderer: WebGLRenderer;
    bounds: Rectangle;
    reset (): void;
    update (delta: number, time: number): void;
    updateTransform (): this;
    render (gameFrame: number): void;
    destroy (): void;
}
