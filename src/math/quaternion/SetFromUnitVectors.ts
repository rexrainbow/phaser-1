import { Dot } from '../vec3';
import { IQuaternion } from './IQuaternion';
import { IVec3 } from '../vec3/IVec3';
import { Quaternion } from './Quaternion';

// assumes direction vectors are normalized

export function SetFromUnitVectors (a: IQuaternion, from: IVec3, to: IVec3, out: Quaternion = new Quaternion()): IQuaternion
{
    const { x: fx, y: fy, z: fz } = from;
    const { x: tx, y: ty, z: tz } = to;

    const epsilon = 0.000001;

    let r = Dot(from, to) + 1;

    if (r < epsilon)
    {
        r = 0;

        if (Math.abs(fx) > Math.abs(fz))
        {
            return out.set(
                -fy,
                fx,
                0,
                r
            );
        }
        else
        {
            return out.set(
                0,
                -fz,
                fy,
                r
            );
        }
    }
    else
    {
        // crossVectors( vFrom, vTo ); // inlined to avoid cyclic dependency on Vector3
        return out.set(
            fy * tz - fz * ty,
            fz * tx - fx * tz,
            fx * ty - fy * tx,
            r
        );
    }
}
