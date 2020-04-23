import { DestroyChildren } from './DestroyChildren';
import { IGameObject } from '../gameobject/IGameObject';
import { IParent } from './IParent';
import { Rectangle } from '../../geom/rectangle/Rectangle';
import { ReparentChildren } from './ReparentChildren';
import { TransformGameObject } from '../transformgameobject/TransformGameObject';

export class Container extends TransformGameObject
{
    children: IGameObject[];

    private _alpha: number = 1;

    constructor (x: number = 0, y: number = 0)
    {
        super(x, y);

        this.children = [];
        this.isParent = true;
        this.type = 'Container';
    }

    getBounds (includeChildren: boolean = false): Rectangle
    {
        return this.bounds;
    }

    update (delta?: number, time?: number): void
    {
        const children = this.children;

        for (let i = 0, numChildren = children.length; i < numChildren; i++)
        {
            const child = children[i];

            if (child && child.willUpdate)
            {
                child.update(delta, time);
            }
        }
    }

    destroy (reparentChildren?: IParent): void
    {
        if (reparentChildren)
        {
            ReparentChildren(this, reparentChildren);
        }
        else
        {
            DestroyChildren(this);
        }

        this.children = null;

        super.destroy();
    }

    get numChildren (): number
    {
        return this.children.length;
    }

    get alpha (): number
    {
        return this._alpha;
    }

    set alpha (value: number)
    {
        if (value !== this._alpha)
        {
            this._alpha = value;

            this.setDirtyRender();
        }
    }
}
