export default function AppendMatrix2d (mat1: Float32Array, mat2: Float32Array, out: Float32Array = new Float32Array(6)): Float32Array
{
    const [ a1, b1, c1, d1, tx1, ty1 ] = mat1;
    const [ a2, b2, c2, d2, tx2, ty2 ] = mat2;

    out.set([
        (a2 * a1) + (b2 * c1),
        (a2 * b1) + (b2 * d1),
        (c2 * a1) + (d2 * c1),
        (c2 * b1) + (d2 * d1),
        (tx2 * a1) + (ty2 * c1) + tx1,
        (tx2 * b1) + (ty2 * d1) + ty1
    ]);

    return out;
}
