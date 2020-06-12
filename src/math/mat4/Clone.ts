import { IMatrix4 } from './IMatrix4';
import { Matrix4 } from './Matrix4';

export function Clone (src: IMatrix4): Matrix4
{
    return new Matrix4(src);
}
