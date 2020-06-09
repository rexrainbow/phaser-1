import { CopyFrom } from './CopyFrom';
import { IQuaternion } from './IQuaternion';
import { Normalize } from './Normalize';
import { Quaternion } from './Quaternion';

// http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/

export function Slerp (a: IQuaternion, b: IQuaternion, t: number, out: Quaternion = new Quaternion()): IQuaternion
{
    if (t === 0)
    {
        return CopyFrom(a, out);
    }
    else if (t === 1)
    {
        return CopyFrom(b, out);
    }

    const { x, y, z, w } = a;
    const { x: bx, y: by, z: bz, w: bw } = b;

    let cosHalfTheta = w * bw + x * bx + y * by + z * bz;

    if (cosHalfTheta < 0)
    {
        out.set(-bx, -by, -bz, -bw);

        cosHalfTheta = -cosHalfTheta;
    }
    else
    {
        CopyFrom(b, out);
    }

    if (cosHalfTheta >= 1)
    {
        return out.set(x, y, z, w);
    }

    const sqrSinHalfTheta = 1 - cosHalfTheta * cosHalfTheta;

    if (sqrSinHalfTheta <= Number.EPSILON)
    {
        const s = 1 - t;

        out.set(
            s * x + t * out.x,
            s * y + t * out.y,
            s * z + t * out.z,
            s * w + t * out.w
        );

        return Normalize(out, out);
    }

    const sinHalfTheta = Math.sqrt(sqrSinHalfTheta);
    const halfTheta = Math.atan2(sinHalfTheta, cosHalfTheta);
    const ratioA = Math.sin((1 - t) * halfTheta) / sinHalfTheta;
    const ratioB = Math.sin(t * halfTheta) / sinHalfTheta;

    return out.set(
        (x * ratioA + out.x * ratioB),
        (y * ratioA + out.y * ratioB),
        (z * ratioA + out.z * ratioB),
        (w * ratioA + out.w * ratioB)
    );
}
