import IGameObject from '../gameobject/IGameObject';
import TransformGameObject from '../transformgameobject/TransformGameObject';
import IParent from './IParent';

export default class Container extends TransformGameObject
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

    update (delta?: number, time?: number)
    {
        const children = this.children;

        for (let i = 0; i < children.length; i++)
        {
            let child = children[i];

            if (child && child.willUpdate)
            {
                child.update(delta, time);
            }
        }
    }

    destroy (reparentChildren?: IParent)
    {
        // if (reparentChildren)
        // {
        //     this.reparentChildren(reparentChildren);
        // }
        // else
        // {
        //     this.destroyChildren();
        // }

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
