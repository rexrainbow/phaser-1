import { Length } from './Length';
import { Quaternion } from './Quaternion';
import { Scale } from './Scale';

export function Normalize (a: Quaternion, out: Quaternion = new Quaternion()): Quaternion
{
    const length = Length(a);

    if (length === 0)
    {
        return out.set(0, 0, 0, 1);
    }
    else
    {
        return Scale(a, length, out);
    }
}
