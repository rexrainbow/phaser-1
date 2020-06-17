import { IMatrix2D } from '../math/matrix2d/IMatrix2D';
import { IMatrix4 } from '../math/mat4/IMatrix4';
import { IRectangle } from '../geom/rectangle/IRectangle';
import { IRenderer } from '../renderer/IRenderer';
import { IStaticWorld } from '../world/IStaticWorld';

export interface IBaseCamera
{
    world: IStaticWorld;
    matrix: IMatrix4;
    renderer: IRenderer;
    type: string;
    width: number;
    height: number;
    bounds: IRectangle;
    dirtyRender: boolean;
    worldTransform: IMatrix2D;
    reset (): void;
    destroy (): void;
}
