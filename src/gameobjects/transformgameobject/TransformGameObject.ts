import GameObject from '../gameobject/GameObject';
import CONST from './const';
import Matrix2D from '../../math/matrix2d/Matrix2D';
import Copy from '../../math/matrix2d/Copy';

export default class TransformGameObject extends GameObject
{
    private transformBuffer: ArrayBuffer;

    transformData: Float32Array;
    localTransform: Matrix2D;
    worldTransform: Matrix2D;

    width: number;
    height: number;

    constructor (x: number = 0, y: number = 0)
    {
        super();

        const byte = Float32Array.BYTES_PER_ELEMENT;

        const buffer = new ArrayBuffer(10 * byte);

        this.transformBuffer = buffer;

        /**
         * transformData:
         * 0 = position x
         * 1 = position y
         * 2 = origin x
         * 3 = origin y
         * 4 = skew x
         * 5 = skew y
         * 6 = scale x
         * 7 = scale y
         * 8 = rotation
         * 9 = angle
         */
        this.transformData = new Float32Array(buffer, 0, 10);
        this.localTransform = new Matrix2D();
        this.worldTransform = new Matrix2D();

        this.transformData.set([ x, y, 0.5, 0.5, 0, 0, 1, 1, 0, 0 ]);

        this.width = 0;
        this.height = 0;

        this.updateCache();
    }

    updateCache ()
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

    updateTransform ()
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

    setSize (width: number, height: number)
    {
        this.width = width;
        this.height = height;

        return this;
    }

    setOrigin (originX: number, originY: number = originX)
    {
        const data = this.transformData;

        data[CONST.ORIGIN_X] = originX;
        data[CONST.ORIGIN_Y] = originY;

        return this;
    }

    setPosition (x: number, y: number = x)
    {
        const data = this.transformData;

        data[CONST.POSITION_X] = x;
        data[CONST.POSITION_Y] = y;

        return this.updateTransform();
    }

    setRotation (rotation: number)
    {
        const data = this.transformData;

        if (rotation !== data[CONST.ROTATION])
        {
            data[CONST.ROTATION] = rotation;

            this.updateCache();
        }

        return this;
    }

    setScale (scaleX: number, scaleY: number = scaleX)
    {
        const data = this.transformData;

        data[CONST.SCALE_X] = scaleX;
        data[CONST.SCALE_Y] = scaleY;

        return this.updateCache();
    }

    setSkew (skewX: number, skewY: number = skewX)
    {
        const data = this.transformData;

        data[CONST.SKEW_X] = skewX;
        data[CONST.SKEW_Y] = skewY;

        return this.updateCache();
    }

    destroy ()
    {
        super.destroy();

        this.localTransform = null;
        this.worldTransform = null;
        this.transformBuffer = null;
        this.transformData = null;
    }

    set x (value: number)
    {
        this.transformData[CONST.POSITION_X] = value;

        this.updateTransform();
    }

    get x (): number
    {
        return this.transformData[CONST.POSITION_X];
    }

    set y (value: number)
    {
        this.transformData[CONST.POSITION_Y] = value;

        this.updateTransform();
    }

    get y (): number
    {
        return this.transformData[CONST.POSITION_Y];
    }

    get originX (): number
    {
        return this.transformData[CONST.ORIGIN_X];
    }

    set originX (value: number)
    {
        this.transformData[CONST.ORIGIN_X] = value;
    }

    get originY (): number
    {
        return this.transformData[CONST.ORIGIN_Y];
    }

    set originY (value: number)
    {
        this.transformData[CONST.ORIGIN_Y] = value;
    }

    set skewX (value: number)
    {
        const data = this.transformData;

        if (value !== data[CONST.SKEW_X])
        {
            data[CONST.SKEW_X] = value;

            this.updateCache();
        }
    }

    get skewX (): number
    {
        return this.transformData[CONST.SKEW_X];
    }

    set skewY (value: number)
    {
        const data = this.transformData;

        if (value !== data[CONST.SKEW_Y])
        {
            data[CONST.SKEW_Y] = value;

            this.updateCache();
        }
    }

    get skewY (): number
    {
        return this.transformData[CONST.SKEW_Y];
    }

    set scaleX (value: number)
    {
        const data = this.transformData;

        if (value !== data[CONST.SCALE_X])
        {
            data[CONST.SCALE_X] = value;

            this.updateCache();
        }
    }

    get scaleX (): number
    {
        return this.transformData[CONST.SCALE_X];
    }

    set scaleY (value: number)
    {
        const data = this.transformData;

        if (value !== data[CONST.SCALE_Y])
        {
            data[CONST.SCALE_Y] = value;

            this.updateCache();
        }
    }

    get scaleY (): number
    {
        return this.transformData[CONST.SCALE_Y];
    }

    set rotation (value: number)
    {
        const data = this.transformData;

        if (value !== data[CONST.ROTATION])
        {
            data[CONST.ROTATION] = value;

            this.updateCache();
        }
    }

    get rotation (): number
    {
        return this.transformData[CONST.ROTATION];
    }
}
