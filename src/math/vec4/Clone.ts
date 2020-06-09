import { IVec4 } from './IVec4';
import { Vec4 } from './Vec4';

export function Clone (source: IVec4): Vec4
{
    const { x, y, z, w } = source;

    return new Vec4(x, y, z, w);
}
