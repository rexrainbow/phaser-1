import { Vec2, Vec2Callback } from '../math/vec2';

import { GameInstance } from '../GameInstance';
import { ICamera } from './ICamera';
import { IRenderer } from '../renderer/IRenderer';
import { IVec2 } from '../math/vec2/IVec2';
import { IWorld } from '../world/IWorld';
import { Matrix2D } from '../math/matrix2d/Matrix2D';
import { Rectangle } from '../geom/rectangle/Rectangle';

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

    private _rotation: number = 0;

    constructor ()
    {
        this.type = 'Camera';

        this.dirtyRender = true;

        const game = GameInstance.get();

        this.renderer = game.renderer;

        this.matrix = new Float32Array([ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ]);

        this.bounds = new Rectangle();

        this.position = new Vec2Callback(() => this.updateTransform(), 0, 0);
        this.scale = new Vec2Callback(() => this.updateTransform(), 1, 1, true);

        // this.worldTransform = new Matrix2D();

        this.reset();
    }

    updateTransform (): void
    {
        const matrix = this.matrix;

        const origin = new Vec2(-this.position.x + 400, -this.position.y + 300);

        this.fromRotationTranslationScaleOrigin(matrix, this.position, this.scale, origin);
    }

    quatRotateZ (rad: number): number[]
    {
        rad *= 0.5;

        const ax = 0;
        const ay = 0;
        const az = 0;
        const aw = 1;
        const bz = Math.sin(rad);
        const bw = Math.cos(rad);

        const out = [ 0, 0, bz, bw ];

        // out[0] = ax * bw + ay * bz;
        // out[1] = ay * bw - ax * bz;
        // out[2] = az * bw + aw * bz;
        // out[3] = aw * bw - az * bz;

        return out;
    }

    fromRotationTranslationScaleOrigin (matrix: Float32Array, v: IVec2, s: IVec2, o: IVec2): Float32Array
    {
        // Quaternion math
        // const q = this.quatRotateZ(this.rotation);

        const x = 0;
        const y = 0;
        const z = Math.sin(this.rotation);
        const w = Math.cos(this.rotation);

        // let x = q[0], y = q[1], z = q[2], w = q[3];
        let x2 = x + x; // 0
        let y2 = y + y; // 0
        let z2 = z + z; // Math.sin(rotation) + Math.sin(rotation)

        let xx = x * x2; // 0
        let xy = x * y2; // 0
        let xz = x * z2; // 0
        let yy = y * y2; // 0
        let yz = y * z2; // 0
        let zz = z * z2; // Math.sin(rotation) * z2
        let wx = w * x2; // 0
        let wy = w * y2; // 0
        let wz = w * z2; // Math.cos(rotation) * z2

        let sx = s.x; // position.x
        let sy = s.y; // position.y
        let sz = 0;   // 0

        let ox = o.x; // origin x
        let oy = o.y; // origin y
        let oz = 0;   // 0

        let out0 = (1 - (yy + zz)) * sx; // (1 - zz) * sx
        let out1 = (xy + wz) * sx; // wz * sx
        let out2 = (xz - wy) * sx; // -wy * sx
        let out4 = (xy - wz) * sy; // -wz * sy
        let out5 = (1 - (xx + zz)) * sy; // (1 - zz) * sy
        let out6 = (yz + wx) * sy; // 0
        let out8 = (xz + wy) * sz; // 0
        let out9 = (yz - wx) * sz; // 0
        let out10 = (1 - (xx + yy)) * sz; // 0

        // [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ]

        matrix[0] = out0;
        matrix[1] = out1;
        matrix[2] = out2;
        // matrix[3] = 0;
        matrix[4] = out4;
        matrix[5] = out5;
        // matrix[6] = out6;
        // matrix[7] = 0;
        // matrix[8] = out8;
        // matrix[9] = out9;
        matrix[10] = 0;
        // matrix[11] = 0;
        matrix[12] = v.x + ox - (out0 * ox + out4 * oy);
        matrix[13] = v.y + oy - (out1 * ox + out5 * oy);
        matrix[14] = 0 + oz - (out2 * ox + out6 * oy);
        // matrix[15] = 1;

        // matrix[0] = out0;
        // matrix[1] = out1;
        // matrix[2] = out2;
        // matrix[3] = 0;
        // matrix[4] = out4;
        // matrix[5] = out5;
        // matrix[6] = out6;
        // matrix[7] = 0;
        // matrix[8] = out8;
        // matrix[9] = out9;
        // matrix[10] = out10;
        // matrix[11] = 0;
        // matrix[12] = v.x + ox - (out0 * ox + out4 * oy + out8 * oz);
        // matrix[13] = v.y + oy - (out1 * ox + out5 * oy + out9 * oz);
        // matrix[14] = 0 + oz - (out2 * ox + out6 * oy + out10 * oz);
        // matrix[15] = 1;

        return matrix;
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
            this._rotation = value;

            this.updateTransform();
        }
    }

    get rotation (): number
    {
        return this._rotation;
    }

    destroy (): void
    {
        this.world = null;
        this.renderer = null;
        this.matrix = null;
        this.bounds = null;
    }
}
