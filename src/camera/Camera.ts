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

        this.identity(matrix);
        this.translateCamera(matrix, this.position);
        this.rotateCamera(matrix, this.rotation);
        // this.scaleCamera(matrix, this.scale);
    }

    identity (matrix: Float32Array): Float32Array
    {
        matrix.set([ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ]);

        return matrix;
    }

    translateCamera (matrix: Float32Array, position: IVec2): Float32Array
    {
        const x = position.x;
        const y = position.y;
        const z = 0;

        matrix[12] = matrix[0] * x + matrix[4] * y + matrix[8] * z + matrix[12];
        matrix[13] = matrix[1] * x + matrix[5] * y + matrix[9] * z + matrix[13];
        matrix[14] = matrix[2] * x + matrix[6] * y + matrix[10] * z + matrix[14];
        matrix[15] = matrix[3] * x + matrix[7] * y + matrix[11] * z + matrix[15];

        return matrix;
    }

    rotateCamera (matrix: Float32Array, rotation: number): Float32Array
    {
        this.translateCamera(matrix, new Vec2(this.position.x + 400, this.position.y + 300));

        const s = Math.sin(rotation);
        const c = Math.cos(rotation);

        const a00 = matrix[0];
        const a01 = matrix[1];
        const a02 = matrix[2];
        const a03 = matrix[3];

        const a10 = matrix[4];
        const a11 = matrix[5];
        const a12 = matrix[6];
        const a13 = matrix[7];

        // Perform axis-specific matrix multiplication
        matrix[0] = a00 * c + a10 * s;
        matrix[1] = a01 * c + a11 * s;
        matrix[2] = a02 * c + a12 * s;
        matrix[3] = a03 * c + a13 * s;
        matrix[4] = a10 * c - a00 * s;
        matrix[5] = a11 * c - a01 * s;
        matrix[6] = a12 * c - a02 * s;
        matrix[7] = a13 * c - a03 * s;

        this.translateCamera(matrix, new Vec2(this.position.x - 400, this.position.y - 300));

        return matrix;
    }

    scaleCamera (matrix: Float32Array, scale: IVec2): Float32Array
    {
        const x = scale.x;
        const y = scale.y;
        const z = 0;

        matrix[0] = matrix[0] * x;
        matrix[1] = matrix[1] * x;
        matrix[2] = matrix[2] * x;
        matrix[3] = matrix[3] * x;

        matrix[4] = matrix[4] * y;
        matrix[5] = matrix[5] * y;
        matrix[6] = matrix[6] * y;
        matrix[7] = matrix[7] * y;

        matrix[8] = matrix[8] * z;
        matrix[9] = matrix[9] * z;
        matrix[10] = matrix[10] * z;
        matrix[11] = matrix[11] * z;

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
