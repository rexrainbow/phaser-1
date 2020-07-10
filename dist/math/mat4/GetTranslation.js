import { Vec3 } from '../vec3/Vec3.js';

function GetTranslation(matrix, out = new Vec3()) {
    const data = matrix.data;
    return out.set(data[12], data[13], data[14]);
}

export { GetTranslation };
