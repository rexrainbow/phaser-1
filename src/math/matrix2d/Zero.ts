import { IMatrix2D } from './IMatrix2D';

//  Zeroes the target Matrix and returns the target

export function Zero (target: IMatrix2D): IMatrix2D
{
    return target.set(0, 0, 0, 0, 0, 0);
}
