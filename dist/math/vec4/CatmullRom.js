import { CatmullRom as CatmullRom$1 } from '../CatmullRom.js';
import { Vec4 } from './Vec4.js';

function CatmullRom(p1, p2, p3, p4, t, out = new Vec4()) {
    return out.set(CatmullRom$1(t, p1.x, p2.x, p3.x, p4.x), CatmullRom$1(t, p1.y, p2.y, p3.y, p4.y), CatmullRom$1(t, p1.z, p2.z, p3.z, p4.z), CatmullRom$1(t, p1.w, p2.w, p3.w, p4.w));
}

export { CatmullRom };
