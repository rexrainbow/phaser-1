import { IVec2 } from './IVec2';

export function CopyFrom (source: IVec2, dest: IVec2): IVec2
{
    return dest.set(source.x, source.y);
}
