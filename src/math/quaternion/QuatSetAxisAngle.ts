import { IVec3Like } from '../vec3/IVec3Like';
import { Quaternion } from './Quaternion';

// http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm

// assumes axis is normalized

export function QuatSetAxisAngle (axis: IVec3Like, angle: number, out: Quaternion = new Quaternion()): Quaternion
{
    const { x, y, z } = axis;

    //  halfAngle
    angle *= 0.5;

    const s = Math.sin(angle);

    return out.set(
        x * s,
        y * s,
        z * s,
        Math.cos(angle)
    );
}
