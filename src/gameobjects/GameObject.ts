import { BoundsComponent, DirtyComponent, InputComponent, TransformComponent } from './components';

import { DestroyChildren } from './DestroyChildren';
import { IBoundsComponent } from './components/bounds/IBoundsComponent';
import { IDirtyComponent } from './components/dirty/IDirtyComponent';
import { IGameObject } from './IGameObject';
import { IInputComponent } from './components/input/IInputComponent';
import { ITransformComponent } from './components/transform/ITransformComponent';
import { IWorld } from '../world/IWorld';
import { ReparentChildren } from './ReparentChildren';

export class GameObject
{
    world: IWorld;
    type: string;
    name: string = '';

    parent: IGameObject;
    children: IGameObject[];

    willRender: boolean = true;
    willUpdate: boolean = true;

    transform: ITransformComponent;
    dirty: IDirtyComponent;
    bounds: IBoundsComponent;
    input: IInputComponent;

    visible: boolean = true;

    constructor (x: number = 0, y: number = 0, type: string = 'GameObject')
    {
        this.type = type;
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
        if (this.willUpdate)
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
    }

    get numChildren (): number
    {
        return this.children.length;
    }

    set width (value: number)
    {
        this.transform.setWidth(value);
    }

    get width (): number
    {
        return this.transform.width;
    }

    set height (value: number)
    {
        this.transform.setHeight(value);
    }

    get height (): number
    {
        return this.transform.height;
    }

    set x (value: number)
    {
        this.transform.setX(value);
    }

    get x (): number
    {
        return this.transform.x;
    }

    set y (value: number)
    {
        this.transform.setY(value);
    }

    get y (): number
    {
        return this.transform.y;
    }

    set originX (value: number)
    {
        this.transform.setOriginX(value);
    }

    get originX (): number
    {
        return this.transform.originX;
    }

    set originY (value: number)
    {
        this.transform.setOriginY(value);
    }

    get originY (): number
    {
        return this.transform.originY;
    }

    set skewX (value: number)
    {
        this.transform.setSkewX(value);
    }

    get skewX (): number
    {
        return this.transform.skewX;
    }

    set skewY (value: number)
    {
        this.transform.setSkewY(value);
    }

    get skewY (): number
    {
        return this.transform.skewY;
    }

    set scaleX (value: number)
    {
        this.transform.setScaleX(value);
    }

    get scaleX (): number
    {
        return this.transform.scaleX;
    }

    set scaleY (value: number)
    {
        this.transform.setScaleY(value);
    }

    get scaleY (): number
    {
        return this.transform.scaleY;
    }

    set rotation (value: number)
    {
        this.transform.setRotation(value);
    }

    get rotation (): number
    {
        return this.transform.rotation;
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
