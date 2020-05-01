import { originX, originY } from '../../../config/DefaultOrigin';

import { IGameObject } from '../../IGameObject';
import { ITransformComponent } from './ITransformComponent';
import { Matrix2D } from '../../../math/matrix2d/Matrix2D';
import { UpdateLocalTransform } from './UpdateLocalTransform';
import { UpdateWorldTransform } from './UpdateWorldTransform';

export class TransformComponent implements ITransformComponent
{
    parent: IGameObject;

    //  This should be treated as read-only, it is always perfectly in sync with the properties in this class
    local: Matrix2D;

    world: Matrix2D;

    x: number = 0;
    y: number = 0;

    rotation: number = 0;

    scaleX: number = 1;
    scaleY: number = 1;

    skewX: number = 0;
    skewY: number = 0;

    originX: number;
    originY: number;

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

        this.originX = originX;
        this.originY = originY;
    }

    update (): void
    {
        this.updateLocal();
        this.updateWorld();
    }

    updateLocal (): void
    {
        this.parent.dirty.setRender();

        UpdateLocalTransform(this);
    }

    updateWorld (): void
    {
        this.parent.dirty.setRender();

        UpdateWorldTransform(this.parent);

        this.updateChildren();
    }

    updateChildren (): void
    {
        //  Sweep all children - by this point our local and world transforms are correct
        const children = this.parent.children;

        for (let i = 0; i < children.length; i++)
        {
            const child = children[i];

            child.transform.updateWorld();
        }
    }

    //  The area covered by this transform component + origin + texture frame (if used)
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

        this.update();
    }

    setX (value: number): void
    {
        this.x = value;

        this.update();
    }

    setY (value: number): void
    {
        this.y = value;

        this.update();
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

        this.update();
    }

    setSkewX (value: number): void
    {
        if (value !== this.skewX)
        {
            this.skewX = value;

            this.update();
        }
    }

    setSkewY (value: number): void
    {
        if (value !== this.skewY)
        {
            this.skewY = value;

            this.update();
        }
    }

    setScale (x: number, y: number): void
    {
        this.scaleX = x;
        this.scaleY = y;

        this.update();
    }

    setScaleX (value: number): void
    {
        if (value !== this.scaleX)
        {
            this.scaleX = value;

            this.update();
        }
    }

    setScaleY (value: number): void
    {
        if (value !== this.scaleY)
        {
            this.scaleY = value;

            this.update();
        }
    }

    setRotation (value: number): void
    {
        if (value !== this.rotation)
        {
            this.rotation = value;

            this.update();
        }
    }

    destroy (): void
    {
        this.parent = null;
        this.local = null;
        this.world = null;
    }
}
