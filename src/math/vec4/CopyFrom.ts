import { IVec4Like } from './IVec4Like';
import { Vec4 } from './Vec4';

export function CopyFrom (source: IVec4Like, dest: Vec4): Vec4
{
    const { x, y, z, w } = source;

    return dest.set(x, y, z, w);
}
