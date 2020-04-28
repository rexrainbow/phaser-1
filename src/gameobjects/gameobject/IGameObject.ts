import { IBoundsComponent } from './IBoundsComponent';
import { IDirtyComponent } from './IDirtyComponent';
import { IInputComponent } from './IInputComponent';
import { ITransformComponent } from './ITransformComponent';
import { IWorld } from '../../world/IWorld';

export interface IGameObject
{
    world: IWorld;
    name: string;
    type: string;

    willRender: boolean;
    willUpdate: boolean;

    parent: IGameObject;
    children: IGameObject[];
    numChildren: number;

    visible: boolean;

    transform: ITransformComponent;
    dirty: IDirtyComponent;
    bounds: IBoundsComponent;
    input: IInputComponent;

    x: number;
    y: number;
    width: number;
    height: number;
    rotation: number;
    scaleX: number;
    scaleY: number;
    skewX: number;
    skewY: number;
    originX: number;
    originY: number;

    isRenderable (): boolean;
    update (delta: number, time: number): void;
    destroy (reparentChildren?: IGameObject): void;
}
