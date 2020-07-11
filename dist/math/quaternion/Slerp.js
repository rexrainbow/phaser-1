import {CopyFrom as CopyFrom2} from "./CopyFrom";
import {Normalize as Normalize2} from "./Normalize";
import {Quaternion as Quaternion2} from "./Quaternion";
export function Slerp(a, b, t, out = new Quaternion2()) {
  if (t === 0) {
    return CopyFrom2(a, out);
  } else if (t === 1) {
    return CopyFrom2(b, out);
  }
  const {x, y, z, w} = a;
  const {x: bx, y: by, z: bz, w: bw} = b;
  let cosHalfTheta = w * bw + x * bx + y * by + z * bz;
  if (cosHalfTheta < 0) {
    out.set(-bx, -by, -bz, -bw);
    cosHalfTheta = -cosHalfTheta;
  } else {
    CopyFrom2(b, out);
  }
  if (cosHalfTheta >= 1) {
    return out.set(x, y, z, w);
  }
  const sqrSinHalfTheta = 1 - cosHalfTheta * cosHalfTheta;
  if (sqrSinHalfTheta <= Number.EPSILON) {
    const s = 1 - t;
    out.set(s * x + t * out.x, s * y + t * out.y, s * z + t * out.z, s * w + t * out.w);
    return Normalize2(out, out);
  }
  const sinHalfTheta = Math.sqrt(sqrSinHalfTheta);
  const halfTheta = Math.atan2(sinHalfTheta, cosHalfTheta);
  const ratioA = Math.sin((1 - t) * halfTheta) / sinHalfTheta;
  const ratioB = Math.sin(t * halfTheta) / sinHalfTheta;
  return out.set(x * ratioA + out.x * ratioB, y * ratioA + out.y * ratioB, z * ratioA + out.z * ratioB, w * ratioA + out.w * ratioB);
}
