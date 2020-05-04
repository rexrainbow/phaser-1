import { ISceneRenderData } from '../scenes/ISceneRenderData';
import { ISprite } from '../gameobjects/sprite/ISprite';

export interface IRenderer
{
    canvas: HTMLCanvasElement;
    width: number;
    height: number;
    resolution: number;
    render (renderData: ISceneRenderData): void;
    renderSprite <T extends ISprite> (renderable: T): void;
}
