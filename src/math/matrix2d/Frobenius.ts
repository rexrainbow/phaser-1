import IMatrix2D from './IMatrix2D';

export default function Frobenius (src: IMatrix2D): number
{
    return(Math.hypot(src.a, src.b, src.c, src.d, src.tx, src.ty, 1));
}
