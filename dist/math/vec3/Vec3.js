class Vec3 {
    constructor(x = 0, y = 0, z = 0) {
        this.set(x, y, z);
    }
    set(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
    }
    toArray(dst = [], index = 0) {
        const { x, y, z } = this;
        dst[index] = x;
        dst[index + 1] = y;
        dst[index + 2] = z;
        return dst;
    }
    fromArray(src, index = 0) {
        return this.set(src[index], src[index + 1], src[index + 2]);
    }
    toString() {
        const { x, y, z } = this;
        return `{ x=${x}, y=${y}, z=${z} }`;
    }
}

export { Vec3 };
