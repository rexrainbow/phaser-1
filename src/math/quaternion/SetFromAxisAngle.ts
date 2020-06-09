import { IQuaternion } from './IQuaternion';
import { IVec3 } from '../vec3/IVec3';
import { Quaternion } from './Quaternion';

// http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm

// assumes axis is normalized

export function SetFromAxisAngle (a: IQuaternion, axis: IVec3, angle: number, out: Quaternion = new Quaternion()): IQuaternion
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
