import '../../utils/base64/Base64ToArrayBuffer.js';
import '../../utils/NOOP.js';
import { Quaternion } from './Quaternion.js';
import { Hermite as Hermite$1 } from '../Hermite.js';

function Hermite(a, b, c, d, t, out = new Quaternion()) {
    return out.set(Hermite$1(t, a.x, b.x, c.x, d.x), Hermite$1(t, a.y, b.y, c.y, d.y), Hermite$1(t, a.z, b.z, c.z, d.z), Hermite$1(t, a.w, b.w, c.w, d.w));
}

export { Hermite };
