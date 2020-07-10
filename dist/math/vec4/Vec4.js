class Vec4 {
    constructor(x = 0, y = 0, z = 0, w = 1) {
        this.set(x, y, z, w);
    }
    set(x = 0, y = 0, z = 0, w = 1) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
        return this;
    }
    toArray(dst = [], index = 0) {
        const { x, y, z, w } = this;
        dst[index] = x;
        dst[index + 1] = y;
        dst[index + 2] = z;
        dst[index + 3] = w;
        return dst;
    }
    fromArray(src, index = 0) {
        return this.set(src[index], src[index + 1], src[index + 2], src[index + 3]);
    }
    toString() {
        const { x, y, z, w } = this;
        return `{ x=${x}, y=${y}, z=${z}, w=${w} }`;
    }
}

export { Vec4 };
