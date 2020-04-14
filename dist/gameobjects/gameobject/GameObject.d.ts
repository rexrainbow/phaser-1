import IInteractiveArea from '../../input/IInteractiveArea';
import Rectangle from '../../geom/Rectangle';
import IParent from '../container/IParent';
import IBaseScene from '../../scenes/IBaseScene';
export default class GameObject {
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
    inputHitArea: IInteractiveArea;
    fixBounds: boolean;
    bounds: Rectangle;
    constructor();
    isRenderable(): boolean;
    setDirtyRender(setFrame?: boolean): this;
    setDirtyUpdate(): this;
    getBounds(includeChildren?: boolean): Rectangle;
    setBounds(x: number, y: number, width: number, height: number): this;
    update(): void;
    updateTransform(): this;
    render(): void;
    destroy(reparentChildren?: IParent): void;
}
//# sourceMappingURL=GameObject.d.ts.map