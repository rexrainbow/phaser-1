import { IInteractiveArea } from '../../input/IInteractiveArea';
import { IParent } from '../container/IParent';
import { IWorld } from '../../world/IWorld';
import { Rectangle } from '../../geom/rectangle/Rectangle';

export interface IGameObject
{
    world: IWorld;
    name: string;
    type: string;
    willRender: boolean;
    willUpdate: boolean;
    dirtyRender: boolean;
    dirtyUpdate: boolean;
    dirtyFrame: number;
    parent: IParent;
    isParent: boolean;
    visible: boolean;
    inputEnabled: boolean;
    inputEnabledChildren: boolean;
    inputHitArea?: IInteractiveArea;
    bounds: Rectangle;
    fixBounds: boolean;
    isRenderable (): boolean;
    setDirtyRender (setFrame?: boolean): this;
    setDirtyUpdate (): this;
    setBounds (x: number, y: number, width: number, height: number): this;
    getBounds (includeChildren?: boolean): Rectangle;
    update (delta: number, time: number): void;
    updateTransform (): this;
    render (gameFrame: number): void;
    destroy (reparentChildren?: IParent): void;
}

//  Merge 3 dirty properties into one object
//  Move set and get bounds to functions
//  Move setDirtyRender and setDirtyUpdate to functions
//  Merge 3 input properties into one object
//  Bounds = new Bounds component with fix etc inside it
