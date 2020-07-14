import { Matrix4 } from './Matrix4';

export function Mat4Clone (src: Matrix4): Matrix4
{
    return new Matrix4(src);
}
