import { GameInstance } from '../../GameInstance';
import { IInteractiveArea } from '../../input/IInteractiveArea';
import { IParent } from '../container/IParent';
import { IWorld } from '../../world/IWorld';
import { Rectangle } from '../../geom/rectangle/Rectangle';

//  The Base Game Object which all World entites extend

export class GameObject
{
    world: IWorld;
    name: string = '';
    type: string = 'GameObject';

    willRender: boolean = true;
    willUpdate: boolean = true;

    dirtyRender: boolean = true;
    dirtyUpdate: boolean = true;
    dirtyFrame: number = 0;

    parent: IParent;
    isParent: boolean = false;

    visible: boolean = true;

    inputEnabled: boolean = false;
    inputEnabledChildren: boolean = true;
    inputHitArea: IInteractiveArea;

    fixBounds: boolean = false;
    bounds: Rectangle = new Rectangle();

    isRenderable (): boolean
    {
        return (this.visible && this.willRender);
    }

    setDirtyRender (setFrame: boolean = true): this
    {
        this.dirtyRender = true;

        if (setFrame)
        {
            const game = GameInstance.get();

            this.dirtyFrame = game.frame;
        }

        return this;
    }

    setDirtyUpdate (): this
    {
        this.dirtyUpdate = true;

        return this;
    }

    getBounds (): Rectangle
    {
        return this.bounds;
    }

    setBounds (x: number, y: number, width: number, height: number): this
    {
        this.bounds.set(x, y, width, height);

        return this;
    }

    update (): void
    {
    }

    updateTransform (): this
    {
        return this;
    }

    render (): void
    {
    }

    destroy (): void
    {
        this.world = null;
    }
}
