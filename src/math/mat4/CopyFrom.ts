import { Matrix4 } from './Matrix4';

export function CopyFrom (src: Matrix4, dest: Matrix4): Matrix4
{
    return dest.fromArray(src.data);
}
