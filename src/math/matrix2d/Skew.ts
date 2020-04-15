import IMatrix2D from './IMatrix2D';

//  Skews the target Matrix by the given angles (in radians), then returns the target Matrix

export default function Skew (target: IMatrix2D, angleX: number, angleY: number): IMatrix2D
{
    target.b += Math.tan(angleX);
    target.c += Math.tan(angleY);

    return target;
}
