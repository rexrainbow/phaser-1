import { IBaseWorld } from '../world/IBaseWorld';
import { IBoundsComponent } from './components/bounds/IBoundsComponent';
import { ICanvasRenderer } from '../renderer/canvas/ICanvasRenderer';
import { IDirtyComponent } from './components/dirty/IDirtyComponent';
import { IInputComponent } from './components/input/IInputComponent';
import { ITransformComponent } from './components/transform/ITransformComponent';
import { IWebGLRenderer } from '../renderer/webgl1/IWebGLRenderer';

export interface IGameObject
{
    world: IBaseWorld;
    name: string;
    type: string;

    willRender: boolean;
    willUpdate: boolean;
    willRenderChildren: boolean;
    willUpdateChildren: boolean;

    parent: IGameObject;
    children: IGameObject[];
    numChildren: number;

    visible: boolean;

    transform: ITransformComponent;
    dirty: IDirtyComponent;
    bounds: IBoundsComponent;
    input: IInputComponent;

    isRenderable (): boolean;

    update (delta: number, time: number): void;
    postUpdate (delta: number, time: number): void;

    render <T extends IWebGLRenderer> (renderer: T): void;
    renderCanvas <T extends ICanvasRenderer> (renderer: T): void;
    postRender <T extends IWebGLRenderer> (renderer: T): void;
    postRenderCanvas <T extends ICanvasRenderer> (renderer: T): void;

    destroy (reparentChildren?: IGameObject): void;
}
