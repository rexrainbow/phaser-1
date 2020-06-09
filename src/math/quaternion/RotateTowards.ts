import { CopyFrom } from './CopyFrom';
import { GetAngle } from './GetAngle';
import { IQuaternion } from './IQuaternion';
import { Quaternion } from './Quaternion';
import { Slerp } from './Slerp';

export function RotateTowards (a: IQuaternion, b: IQuaternion, step: number, out: Quaternion = new Quaternion()): IQuaternion
{
    const angle = GetAngle(a, b);

    if (angle === 0)
    {
        return CopyFrom(a, out);
    }

    const t = Math.min(1, step / angle);

    return Slerp(a, b, t, out);
}
