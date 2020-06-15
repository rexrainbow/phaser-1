import { IMatrix4 } from './IMatrix4';

//  4x4 Matrix in column-major format

/**
 * data[0] = m00
 * data[1] = m01
 * data[2] = m02
 * data[3] = m03
 * data[4] = m10
 * data[5] = m11
 * data[6] = m12
 * data[7] = m13
 * data[8] = m20
 * data[9] = m21
 * data[10] = m22
 * data[11] = m23
 * data[12] = m30
 * data[13] = m31
 * data[14] = m32
 * data[15] = m33
 */

export class Matrix4 implements IMatrix4
{
    data: Float32Array;

    constructor (src?: Matrix4)
    {
        const data = new Float32Array(16);

        this.data = data;

        if (src)
        {
            this.fromArray(src.data);
        }
        else
        {
            data[0] = 1;
            data[5] = 1;
            data[10] = 1;
            data[15] = 1;
        }
    }

    /**
     * @param m00 - 1st value of 1st row
     * @param m01 - 2nd value of 1st row
     * @param m02 - 3rd value of 1st row
     * @param m03 - 4th value of 1st row
     * @param m10 - 1st value of 2nd row
     * @param m11 - 2nd value of 2nd row
     * @param m12 - 3rd value of 2nd row
     * @param m13 - 4th value of 2nd row
     * @param m20 - 1st value of 3rd row
     * @param m21 - 2nd value of 3rd row
     * @param m22 - 3rd value of 3rd row
     * @param m23 - 4th value of 3rd row
     * @param m30 - 1st value of 4th row
     * @param m31 - 2nd value of 4th row
     * @param m32 - 3rd value of 4th row
     * @param m33 - 4th value of 4th row
     */
    set (m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number, m20: number, m21: number, m22: number, m23: number, m30: number, m31: number, m32: number, m33: number): this
    {
        const data = this.data;

        data[ 0 ] = m00;
        data[ 1 ] = m01;
        data[ 2 ] = m02;
        data[ 3 ] = m03;

        data[ 4 ] = m10;
        data[ 5 ] = m11;
        data[ 6 ] = m12;
        data[ 7 ] = m13;

        data[ 8 ] = m20;
        data[ 9 ] = m21;
        data[ 10 ] = m22;
        data[ 11 ] = m23;

        data[ 12 ] = m30;
        data[ 13 ] = m31;
        data[ 14 ] = m32;
        data[ 15 ] = m33;

        return this;
    }

    toArray (dst: Float32List = [], index: number = 0): Float32List
    {
        const data = this.data;

        for (let i = 0; i < 16; i++)
        {
            dst[ index + i ] = data[i];
        }

        return dst;
    }

    fromArray (src: Float32List, index: number = 0): this
    {
        const data = this.data;

        for (let i = 0; i < 16; i++)
        {
            data[i] = src[ index + i ];
        }

        return this;
    }

    toString (): string
    {
        return '[ mat4=' + this.data.join(', ') + ' ]';
    }

}
