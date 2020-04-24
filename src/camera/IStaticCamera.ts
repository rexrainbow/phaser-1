import { IMatrix2D } from '../math/matrix2d/IMatrix2D';
import { IRectangle } from '../geom/rectangle/IRectangle';
import { IWorld } from '../world/IWorld';
import { WebGLRenderer } from '../renderer/webgl1/WebGLRenderer';

export interface IStaticCamera
{
    world: IWorld;
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
