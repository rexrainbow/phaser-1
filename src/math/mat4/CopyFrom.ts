import { IMatrix4 } from './IMatrix4';

export function CopyFrom (src: IMatrix4, dest: IMatrix4): IMatrix4
{
    src.toArray(dest.data);

    return dest;
}
