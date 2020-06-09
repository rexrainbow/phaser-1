import { IQuaternion } from './IQuaternion';
import { Length } from './Length';
import { Quaternion } from './Quaternion';
import { Scale } from './Scale';

export function Normalize (a: IQuaternion, out: Quaternion = new Quaternion()): IQuaternion
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
