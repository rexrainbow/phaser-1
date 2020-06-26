import { IVec4Like } from './IVec4Like';
import { Vec4 } from './Vec4';

export function Clone (source: IVec4Like): Vec4
{
    const { x, y, z, w } = source;

    return new Vec4(x, y, z, w);
}
