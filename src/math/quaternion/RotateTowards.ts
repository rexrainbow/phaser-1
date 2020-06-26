import { CopyFrom } from './CopyFrom';
import { GetAngle } from './GetAngle';
import { Quaternion } from './Quaternion';
import { Slerp } from './Slerp';

export function RotateTowards (a: Quaternion, b: Quaternion, step: number, out: Quaternion = new Quaternion()): Quaternion
{
    const angle = GetAngle(a, b);

    if (angle === 0)
    {
        return CopyFrom(a, out);
    }

    const t = Math.min(1, step / angle);

    return Slerp(a, b, t, out);
}
