import { CopyFrom } from './CopyFrom';
import { GetAngle } from './GetAngle';
import { IQuaternionLike } from './IQuaternionLike';
import { Quaternion } from './Quaternion';
import { Slerp } from './Slerp';

export function RotateTowards (a: IQuaternionLike, b: IQuaternionLike, step: number, out: Quaternion = new Quaternion()): Quaternion
{
    const angle = GetAngle(a, b);

    if (angle === 0)
    {
        return CopyFrom(a, out);
    }

    const t = Math.min(1, step / angle);

    return Slerp(a, b, t, out);
}
