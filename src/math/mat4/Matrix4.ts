import { IMatrix4 } from './IMatrix4';

//  4x4 Matrix in column-major format

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
     * @param m11 - 1st value of 1st row
     * @param m12 - 2nd value of 1st row
     * @param m13 - 3rd value of 1st row
     * @param m14 - 4th value of 1st row
     * @param m21 - 1st value of 2nd row
     * @param m22 - 2nd value of 2nd row
     * @param m23 - 3rd value of 2nd row
     * @param m24 - 4th value of 2nd row
     * @param m31 - 1st value of 3rd row
     * @param m32 - 2nd value of 3rd row
     * @param m33 - 3rd value of 3rd row
     * @param m34 - 4th value of 3rd row
     * @param m41 - 1st value of 4th row
     * @param m42 - 2nd value of 4th row
     * @param m43 - 3rd value of 4th row
     * @param m44 - 4th value of 4th row
     */
    set (m11: number, m12: number, m13: number, m14: number, m21: number, m22: number, m23: number, m24: number, m31: number, m32: number, m33: number, m34: number, m41: number, m42: number, m43: number, m44: number): this
    {
        const data = this.data;

        data[ 0 ] = m11;
        data[ 1 ] = m21;
        data[ 2 ] = m31;
        data[ 3 ] = m41;

        data[ 4 ] = m12;
        data[ 5 ] = m22;
        data[ 6 ] = m32;
        data[ 7 ] = m42;

        data[ 8 ] = m13;
        data[ 9 ] = m23;
        data[ 10 ] = m33;
        data[ 11 ] = m43;

        data[ 12 ] = m14;
        data[ 13 ] = m24;
        data[ 14 ] = m34;
        data[ 15 ] = m44;

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
}
