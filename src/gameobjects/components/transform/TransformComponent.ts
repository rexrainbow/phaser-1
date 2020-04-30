import { IGameObject } from '../../IGameObject';
import { ITransformComponent } from './ITransformComponent';
import { Matrix2D } from '../../../math/matrix2d/Matrix2D';
import { UpdateLocalTransform } from './UpdateLocalTransform';
import { UpdateWorldTransform } from './UpdateWorldTransform';

export class TransformComponent implements ITransformComponent
{
    parent: IGameObject;

    local: Matrix2D;
    world: Matrix2D;

    x: number = 0;
    y: number = 0;

    rotation: number = 0;

    scaleX: number = 1;
    scaleY: number = 1;

    skewX: number = 0;
    skewY: number = 0;

    originX: number = 0.5;
    originY: number = 0.5;

    width: number = 0;
    height: number = 0;

    left: number = 0;
    right: number = 0;
    top: number = 0;
    bottom: number = 0;

    constructor (parent: IGameObject, x: number = 0, y: number = 0)
    {
        this.parent = parent;

        this.local = new Matrix2D();
        this.world = new Matrix2D();

        this.x = x;
        this.y = y;
    }

    setExtent (left: number, right: number, top: number, bottom: number): void
    {
        this.left = left;
        this.right = right;
        this.top = top;
        this.bottom = bottom;
    }

    setSize (width: number, height: number): void
    {
        this.width = width;
        this.height = height;
    }

    setWidth (value: number): void
    {
        this.width = value;
    }

    setHeight (value: number): void
    {
        this.height = value;
    }

    setPosition (x: number, y: number): void
    {
        this.x = x;
        this.y = y;

        UpdateWorldTransform(this.parent);
    }

    setX (value: number): void
    {
        this.x = value;

        UpdateWorldTransform(this.parent);
    }

    setY (value: number): void
    {
        this.y = value;

        UpdateWorldTransform(this.parent);
    }

    setOrigin (x: number, y: number): void
    {
        this.originX = x;
        this.originY = y;

        this.parent.dirty.setRender();
    }

    setOriginX (value: number): void
    {
        this.originX = value;

        this.parent.dirty.setRender();
    }

    setOriginY (value: number): void
    {
        this.originX = value;

        this.parent.dirty.setRender();
    }

    setSkew (x: number, y: number): void
    {
        this.skewX = x;
        this.skewY = y;

        UpdateLocalTransform(this.parent);
    }

    setSkewX (value: number): void
    {
        if (value !== this.skewX)
        {
            this.skewX = value;

            UpdateLocalTransform(this.parent);
        }
    }

    setSkewY (value: number): void
    {
        if (value !== this.skewY)
        {
            this.skewY = value;

            UpdateLocalTransform(this.parent);
        }
    }

    setScale (x: number, y: number): void
    {
        this.scaleX = x;
        this.scaleY = y;

        UpdateLocalTransform(this.parent);
    }

    setScaleX (value: number): void
    {
        if (value !== this.scaleX)
        {
            this.scaleX = value;

            UpdateLocalTransform(this.parent);
        }
    }

    setScaleY (value: number): void
    {
        if (value !== this.scaleY)
        {
            this.scaleY = value;

            UpdateLocalTransform(this.parent);
        }
    }

    setRotation (value: number): void
    {
        if (value !== this.rotation)
        {
            this.rotation = value;

            UpdateLocalTransform(this.parent);
        }
    }

    destroy (): void
    {
        this.parent = null;
        this.local = null;
        this.world = null;
    }
}
