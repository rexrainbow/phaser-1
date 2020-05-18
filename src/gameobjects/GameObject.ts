import { BoundsComponent, InputComponent, TransformComponent } from './components';

import { DIRTY_CONST } from './DIRTY_CONST';
import { DestroyChildren } from '../display/DestroyChildren';
import { GameInstance } from '../GameInstance';
import { IBaseWorld } from '../world/IBaseWorld';
import { IBoundsComponent } from './components/bounds/IBoundsComponent';
import { ICanvasRenderer } from '../renderer/canvas/ICanvasRenderer';
import { IGameObject } from './IGameObject';
import { IInputComponent } from './components/input/IInputComponent';
import { ITransformComponent } from './components/transform/ITransformComponent';
import { IWebGLRenderer } from '../renderer/webgl1/IWebGLRenderer';
import { ReparentChildren } from '../display/ReparentChildren';

export class GameObject
{
    type: string = 'GameObject';
    name: string = '';

    //  The World this Game Object belongs to. A Game Object can only belong to one World instance at any one time.
    world: IBaseWorld;

    //  The direct parent of this Game Object in the display list (if any)
    parent: IGameObject;

    //  The root parent of this Game Object. This is the top-most parent, not including the World, from which this child descends.
    root: IGameObject;

    children: IGameObject[];

    willUpdate: boolean = true;
    willUpdateChildren: boolean = true;

    willRender: boolean = true;
    willRenderChildren: boolean = true;

    dirty: number = 0;
    dirtyFrame: number = 0;

    transform: ITransformComponent;
    bounds: IBoundsComponent;
    input: IInputComponent;

    visible: boolean = true;

    constructor (x: number = 0, y: number = 0)
    {
        this.children = [];

        this.transform = new TransformComponent(this, x, y);
        this.bounds = new BoundsComponent(this);
        this.input = new InputComponent(this);

        this.dirty ^= DIRTY_CONST.DEFAULT;

        this.transform.update();
    }

    isRenderable (): boolean
    {
        return (this.visible && this.willRender);
    }

    isDirty (flag: number): boolean
    {
        return (this.dirty & flag) !== 0;
    }

    clearDirty (flag: number): this
    {
        if (this.isDirty(flag))
        {
            this.dirty ^= flag;
        }

        return this;
    }

    setDirty (flag: number): this
    {
        if (!this.isDirty(flag))
        {
            this.dirty ^= flag;
            this.dirtyFrame = GameInstance.getFrame();
        }

        return this;
    }

    update (delta: number, time: number): void
    {
        if (this.willUpdateChildren)
        {
            const children = this.children;

            for (let i = 0; i < children.length; i++)
            {
                const child = children[i];

                if (child && child.willUpdate)
                {
                    child.update(delta, time);
                }
            }
        }

        this.postUpdate(delta, time);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    postUpdate (delta: number, time: number): void
    {
        //  Empty for parent classes to use.
        //  Called after this GameObject and all of its children have been updated.
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    render <T extends IWebGLRenderer> (renderer: T): void
    {
        this.clearDirty(DIRTY_CONST.PENDING_RENDER);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    renderCanvas <T extends ICanvasRenderer> (renderer: T): void
    {
        this.clearDirty(DIRTY_CONST.PENDING_RENDER);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    postRender <T extends IWebGLRenderer> (renderer: T): void
    {
        //  Called after this GameObject and all of its children have been rendered.
        //  If it doesn't have any children, this method is never called.
        this.clearDirty(DIRTY_CONST.POST_RENDER);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    postRenderCanvas <T extends ICanvasRenderer> (renderer: T): void
    {
        //  Called after this GameObject and all of its children have been rendered.
        //  If it doesn't have any children, this method is never called.
        this.clearDirty(DIRTY_CONST.POST_RENDER);
    }

    get numChildren (): number
    {
        return this.children.length;
    }

    destroy (reparentChildren?: IGameObject): void
    {
        if (reparentChildren)
        {
            ReparentChildren(this, reparentChildren);
        }
        else
        {
            DestroyChildren(this);
        }

        this.transform.destroy();
        this.bounds.destroy();
        this.input.destroy();

        this.world = null;
        this.parent = null;
        this.children = null;
    }
}
