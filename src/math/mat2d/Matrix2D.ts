//  A Matrix2D contains six elements in a short-form of the 3x3 Matrix, with the last column ignored.

//  |----|----|----|
//  | a  | b  | 0  |
//  |----|----|----|
//  | c  | d  | 0  |
//  |----|----|----|
//  | tx | ty | 1  |
//  |----|----|----|

export class Matrix2D
{
    a: number; // element 0
    b: number; // element 1
    c: number; // element 2
    d: number; // element 3
    tx: number; // element 4
    ty: number; // element 5

    /**
     * Creates an instance of Matrix2D.
     *
     * @param {number} [a=1] - X scale.
     * @param {number} [b=0] - X skew.
     * @param {number} [c=0] - Y skew.
     * @param {number} [d=1] - Y scale.
     * @param {number} [tx=0] - X translation
     * @param {number} [ty=0] - Y translation
     * @memberof Matrix2D
     */
    constructor (a: number = 1, b: number = 0, c: number = 0, d: number = 1, tx: number = 0, ty: number = 0)
    {
        this.set(a, b, c, d, tx, ty);
    }

    set (a: number = 1, b: number = 0, c: number = 0, d: number = 1, tx: number = 0, ty: number = 0): this
    {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.tx = tx;
        this.ty = ty;

        return this;
    }

    identity (): this
    {
        return this.set();
    }

    toArray (): number[]
    {
        const  { a, b, c, d, tx, ty } = this;

        return [ a, b, c, d, tx, ty ];
    }

    fromArray (src: number[]): Matrix2D
    {
        return this.set(src[0], src[1], src[2], src[3], src[4], src[5]);
    }
}
