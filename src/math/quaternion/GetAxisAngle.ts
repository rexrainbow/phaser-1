import { IQuaternionLike } from './IQuaternionLike';
import { Quaternion } from './Quaternion';

/**
 * Gets the rotation axis and angle for a given
 *  quaternion. If a quaternion is created with
 *  setAxisAngle, this method will return the same
 *  values as providied in the original parameter list
 *  OR functionally equivalent values.
 * Example: The quaternion formed by axis [0, 0, 1] and
 *  angle -90 is the same as the quaternion formed by
 *  [0, 0, 1] and 270. This method favors the latter.
 */

export function GetAxisAngle (a: IQuaternionLike, out: Quaternion = new Quaternion()): number
{
    const rad = Math.acos(a.w) * 2;
    const s = Math.sin(rad / 2);
    const epsilon = 0.000001;

    if (s > epsilon)
    {
        out.set(
            a.x / s,
            a.y / s,
            a.z / s
        );
    }
    else
    {
        // If s is zero, return any axis (no rotation - axis does not matter)
        out.set(1, 0, 0);
    }

    return rad;
}
