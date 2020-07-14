import { GetQuatLength } from './GetQuatLength';
import { QuatScale } from './QuatScale';
import { Quaternion } from './Quaternion';

export function QuatNormalize (a: Quaternion, out: Quaternion = new Quaternion()): Quaternion
{
    const length = GetQuatLength(a);

    if (length === 0)
    {
        return out.set(0, 0, 0, 1);
    }
    else
    {
        return QuatScale(a, length, out);
    }
}
