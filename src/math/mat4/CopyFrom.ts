import { IMatrix4 } from './IMatrix4';
import { Matrix4 } from './Matrix4';

export function CopyFrom (src: IMatrix4, dest: Matrix4): Matrix4
{
    return dest.fromArray(src.data);
}
