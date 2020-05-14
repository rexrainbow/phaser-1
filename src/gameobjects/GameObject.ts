import { BoundsComponent, DirtyComponent, InputComponent, TransformComponent } from './components';

import { DestroyChildren } from '../display/DestroyChildren';
import { IBaseWorld } from '../world/IBaseWorld';
import { IBoundsComponent } from './components/bounds/IBoundsComponent';
import { ICanvasRenderer } from '../renderer/canvas/ICanvasRenderer';
import { IDirtyComponent } from './components/dirty/IDirtyComponent';
import { IGameObject } from './IGameObject';
import { IInputComponent } from './components/input/IInputComponent';
import { ITransformComponent } from './components/transform/ITransformComponent';
import { IWebGLRenderer } from '../renderer/webgl1/IWebGLRenderer';
import { ReparentChildren } from '../display/ReparentChildren';

export class GameObject
{
    world: IBaseWorld;
    type: string = 'GameObject';
    name: string = '';

    parent: IGameObject;
    children: IGameObject[];

    willUpdate: boolean = true;
    willUpdateChildren: boolean = true;

    willRender: boolean = true;
    willRenderChildren: boolean = true;

    transform: ITransformComponent;
    dirty: IDirtyComponent;
    bounds: IBoundsComponent;
    input: IInputComponent;

    visible: boolean = true;

    constructor (x: number = 0, y: number = 0)
    {
        this.children = [];

        this.dirty = new DirtyComponent(this);
        this.transform = new TransformComponent(this, x, y);
        this.bounds = new BoundsComponent(this);
        this.input = new InputComponent(this);

        this.transform.update();
    }

    isRenderable (): boolean
    {
        return (this.visible && this.willRender);
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

    preRender (): void
    {
        this.dirty.pendingRender = false;
    }

    postRender (): void
    {
        this.dirty.postRender = false;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    renderGL <T extends IWebGLRenderer> (renderer: T): void
    {
        this.preRender();
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    renderCanvas <T extends ICanvasRenderer> (renderer: T): void
    {
        this.preRender();
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    postRenderGL <T extends IWebGLRenderer> (renderer: T): void
    {
        //  Called after this GameObject and all of its children have been rendered.
        //  If it doesn't have any children, this method is never called.
        this.postRender();
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    postRenderCanvas <T extends ICanvasRenderer> (renderer: T): void
    {
        //  Called after this GameObject and all of its children have been rendered.
        //  If it doesn't have any children, this method is never called.
        this.postRender();
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
        this.dirty.destroy();
        this.bounds.destroy();
        this.input.destroy();

        this.world = null;
        this.parent = null;
        this.children = null;
    }
}
