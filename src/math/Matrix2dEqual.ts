export default function Matrix2dEqual (mat1: Float32Array, mat2: Float32Array): boolean
{
    return (
        mat1[0] === mat2[0] &&
        mat1[1] === mat2[1] &&
        mat1[2] === mat2[2] &&
        mat1[3] === mat2[3] &&
        mat1[4] === mat2[4] &&
        mat1[5] === mat2[5]
    );
}
