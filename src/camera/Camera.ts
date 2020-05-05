import { Clamp } from '../math';
import { GameInstance } from '../GameInstance';
import { GetVerticesFromValues } from '../gameobjects/components/transform/GetVerticesFromValues';
import { ICamera } from './ICamera';
import { IRenderer } from '../renderer/IRenderer';
import { IWorld } from '../world/IWorld';
import { Matrix2D } from '../math/matrix2d/Matrix2D';
import { Rectangle } from '../geom/rectangle/Rectangle';
import { Vec2Callback } from '../math/vec2/Vec2Callback';
import { WrapAngle } from '../math/angle';

export class Camera implements ICamera
{
    world: IWorld;
    matrix: Float32Array;
    renderer: IRenderer;
    type: string;

    width: number;
    height: number;
    bounds: Rectangle;

    dirtyRender: boolean;
    worldTransform: Matrix2D;

    position: Vec2Callback;
    scale: Vec2Callback;
    origin: Vec2Callback;

    private _rotation: number = 0;

    constructor ()
    {
        this.type = 'Camera';

        this.dirtyRender = true;

        const game = GameInstance.get();

        this.renderer = game.renderer;

        this.matrix = new Float32Array([ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ]);

        this.bounds = new Rectangle();

        this.worldTransform = new Matrix2D();

        this.position = new Vec2Callback(() => this.updateTransform(), 0, 0);
        this.scale = new Vec2Callback(() => this.updateTransform(), 1, 1);
        this.origin = new Vec2Callback(() => this.updateTransform(), 0.5, 0.5);

        this.reset();
    }

    updateTransform (): void
    {
        const matrix = this.matrix;

        const px = this.position.x;
        const py = this.position.y;

        const sx = this.scale.x;
        const sy = this.scale.y;

        const ox = -px + (this.width * this.origin.x);
        const oy = -py + (this.height * this.origin.y);

        const z = Math.sin(this.rotation);
        const w = Math.cos(this.rotation);

        const z2 = z + z;
        const zz = z * z2;
        const wz = w * z2;

        const out0 = (1 - zz) * sx;
        const out1 = wz * sx;
        const out4 = -wz * sy;
        const out5 = (1 - zz) * sy;

        matrix[0] = out0;
        matrix[1] = out1;
        matrix[4] = out4;
        matrix[5] = out5;
        matrix[12] = px + ox - (out0 * ox + out4 * oy);
        matrix[13] = py + oy - (out1 * ox + out5 * oy);

        this.worldTransform.set(
            w * sx,
            z * sx,
            -z * sy,
            w * sy,
            -px,
            -py
        );

        const { a, b, c, d, tx, ty } = this.worldTransform;
        const left = -(this.width / 2);
        const right = this.width;
        const top = -(this.height / 2);
        const bottom = this.height;

        //  update bounds
        const x0 = (left * a) + (top * c) + tx;
        const y0 = (left * b) + (top * d) + ty;

        const x1 = (left * a) + (bottom * c) + tx;
        const y1 = (left * b) + (bottom * d) + ty;

        const x2 = (right * a) + (bottom * c) + tx;
        const y2 = (right * b) + (bottom * d) + ty;

        const x3 = (right * a) + (top * c) + tx;
        const y3 = (right * b) + (top * d) + ty;

        const bx = Math.min(x0, x1, x2, x3);
        const by = Math.min(y0, y1, y2, y3);
        const bw = Math.max(x0, x1, x2, x3);
        const bh = Math.max(y0, y1, y2, y3);

        this.bounds.set(
            bx,
            by,
            bw - bx,
            bh - by
        );

        // this.bounds.x = -px;
        // this.bounds.y = -py;

        console.log('b', bx, by, this.bounds.width, this.bounds.height);

        this.dirtyRender = true;
    }

    reset (): void
    {
        const width = this.renderer.width;
        const height = this.renderer.height;

        this.width = width;
        this.height = height;

        this.bounds.set(0, 0, width, height);
    }

    set rotation (value: number)
    {
        if (value !== this._rotation)
        {
            this._rotation = WrapAngle(value);

            this.updateTransform();
        }
    }

    get rotation (): number
    {
        return this._rotation;
    }

    destroy (): void
    {
        this.position.destroy();
        this.scale.destroy();
        this.origin.destroy();

        this.world = null;
        this.worldTransform = null;
        this.renderer = null;
        this.matrix = null;
        this.bounds = null;
    }
}
