import { PackColor } from '../src/renderer/webgl1';
import { Vertex } from '../src/gameobjects/components';

type vec3Like = {
    x: number;
    y: number;
    z: number;
};

export class Face
{
    vertex1: Vertex;
    vertex2: Vertex;
    vertex3: Vertex;

    normal1: vec3Like;
    normal2: vec3Like;
    normal3: vec3Like;

    color: number = 0xff0000;
    alpha: number = 1;

    constructor (v1: vec3Like, v2: vec3Like, v3: vec3Like, n1: vec3Like, n2: vec3Like, n3: vec3Like, scale: number = 1)
    {
        this.vertex1 = new Vertex(v1.x * scale, v1.y * scale, v1.z * scale);
        this.vertex2 = new Vertex(v2.x * scale, v2.y * scale, v2.z * scale);
        this.vertex3 = new Vertex(v3.x * scale, v3.y * scale, v3.z * scale);

        this.normal1 = n1;
        this.normal2 = n2;
        this.normal3 = n3;
    }

    setColor (color: number, alpha: number = 1)
    {
        this.color = color;
        this.alpha = alpha;
    }

    addToBuffer (F32: Float32Array, U32: Uint32Array, offset: number): number
    {
        const v1 = this.vertex1;
        const v2 = this.vertex2;
        const v3 = this.vertex3;

        const n1 = this.normal1;
        const n2 = this.normal2;
        const n3 = this.normal3;

        const color = PackColor(this.color, this.alpha);

        F32[offset + 0] = v1.x;
        F32[offset + 1] = v1.y;
        F32[offset + 2] = v1.z;
        F32[offset + 3] = n1.x;
        F32[offset + 4] = n1.y;
        F32[offset + 5] = n1.z;
        U32[offset + 6] = color;

        F32[offset + 7] = v2.x;
        F32[offset + 8] = v2.y;
        F32[offset + 9] = v2.z;
        F32[offset + 10] = n2.x;
        F32[offset + 11] = n2.y;
        F32[offset + 12] = n2.z;
        U32[offset + 13] = color;

        F32[offset + 14] = v3.x;
        F32[offset + 15] = v3.y;
        F32[offset + 16] = v3.z;
        F32[offset + 17] = n3.x;
        F32[offset + 18] = n3.y;
        F32[offset + 19] = n3.z;
        U32[offset + 20] = color;

        // console.log(offset);

        return offset + 21;
    }
}
