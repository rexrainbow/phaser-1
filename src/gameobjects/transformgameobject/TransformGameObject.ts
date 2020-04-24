import { Copy } from '../../math/matrix2d/Copy';
import { GameObject } from '../gameobject/GameObject';
import { Matrix2D } from '../../math/matrix2d/Matrix2D';
import { Vec2 } from '../../math/vec2';

export class TransformGameObject extends GameObject
{
    localTransform: Matrix2D;
    worldTransform: Matrix2D;

    width: number;
    height: number;

    private _position: Vec2 = new Vec2();
    private _origin: Vec2 = new Vec2(0.5, 0.5);
    private _skew: Vec2 = new Vec2(0, 0);
    private _scale: Vec2 = new Vec2(1, 1);
    private _rotation: number = 0;

    constructor (x: number = 0, y: number = 0)
    {
        super();

        this.localTransform = new Matrix2D();
        this.worldTransform = new Matrix2D();

        this._position.set(x, y);

        this.width = 0;
        this.height = 0;

        this.updateCache();
    }

    updateCache (): this
    {
        const transform = this.localTransform;

        const { rotation, skewX, skewY, scaleX, scaleY, x, y } = this;

        transform.set(
            Math.cos(rotation + skewY) * scaleX,
            Math.sin(rotation + skewY) * scaleX,
            -Math.sin(rotation - skewX) * scaleY,
            Math.cos(rotation - skewX) * scaleY,
            x,
            y
        );

        return this.updateTransform();
    }

    updateTransform (): this
    {
        this.setDirtyRender();

        const parent = this.parent;

        const lt = this.localTransform;
        const wt = this.worldTransform;

        lt.tx = this.x;
        lt.ty = this.y;

        if (!parent)
        {
            Copy(lt, wt);

            return this;
        }

        const { a, b, c, d, tx, ty } = lt;
        const { a: pa, b: pb, c: pc, d: pd, tx: ptx, ty: pty } = parent.worldTransform;

        wt.set(
            a  * pa + b  * pc,
            a  * pb + b  * pd,
            c  * pa + d  * pc,
            c  * pb + d  * pd,
            tx * pa + ty * pc + ptx,
            tx * pb + ty * pd + pty
        );

        return this;
    }

    destroy (): void
    {
        super.destroy();

        this.localTransform = null;
        this.worldTransform = null;
        this._position = null;
        this._origin = null;
        this._scale = null;
        this._skew = null;
    }

    set x (value: number)
    {
        this._position.x = value;

        this.updateTransform();
    }

    get x (): number
    {
        return this._position.x;
    }

    set y (value: number)
    {
        this._position.y = value;

        this.updateTransform();
    }

    get y (): number
    {
        return this._position.y;
    }

    set originX (value: number)
    {
        this._origin.x = value;
    }

    get originX (): number
    {
        return this._origin.x;
    }

    set originY (value: number)
    {
        this._origin.y = value;
    }

    get originY (): number
    {
        return this._origin.y;
    }

    set skewX (value: number)
    {
        if (value !== this._skew.x)
        {
            this._skew.x = value;

            this.updateCache();
        }
    }

    get skewX (): number
    {
        return this._skew.x;
    }

    set skewY (value: number)
    {
        if (value !== this._skew.y)
        {
            this._skew.y = value;

            this.updateCache();
        }
    }

    get skewY (): number
    {
        return this._skew.y;
    }

    set scaleX (value: number)
    {
        if (value !== this._scale.x)
        {
            this._scale.x = value;

            this.updateCache();
        }
    }

    get scaleX (): number
    {
        return this._scale.x;
    }

    set scaleY (value: number)
    {
        if (value !== this._scale.y)
        {
            this._scale.y = value;

            this.updateCache();
        }
    }

    get scaleY (): number
    {
        return this._scale.y;
    }

    set rotation (value: number)
    {
        if (value !== this._rotation)
        {
            this._rotation = value;

            this.updateCache();
        }
    }

    get rotation (): number
    {
        return this._rotation;
    }
}
