import IInteractiveArea from '../../input/IInteractiveArea';
import Rectangle from '../../geom/Rectangle';
import IParent from '../container/IParent';
import IBaseScene from '../../scenes/IBaseScene';

export default interface IGameObject
{
    scene: IBaseScene;
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
    render (...args: any[]): void;
    destroy (reparentChildren?: IParent): void;
}
