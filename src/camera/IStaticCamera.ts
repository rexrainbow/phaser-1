import { IMatrix2D } from '../math/matrix2d/IMatrix2D';
import { IRectangle } from '../geom/rectangle/IRectangle';
import { IScene } from '../scenes/IScene';
import { WebGLRenderer } from '../renderer/webgl1/WebGLRenderer';

export interface IStaticCamera
{
    scene: IScene;
    matrix: Float32Array;
    renderer: WebGLRenderer;
    type: string;
    width: number;
    height: number;
    bounds: IRectangle;
    dirtyRender: boolean;
    worldTransform: IMatrix2D;
    reset (): void;
    destroy (): void;
}
