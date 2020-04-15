import Container from '../container/Container';
import SetTexture from './SetTexture';
import SetFrame from './SetFrame';
export default class Sprite extends Container {
    constructor(x, y, texture, frame) {
        super(x, y);
        this.hasTexture = false;
        this._tint = 0xffffff;
        this._prevTextureID = -1;
        this.vertexData = new Float32Array(24).fill(0);
        this.vertexColor = new Uint32Array(4).fill(4294967295);
        this.vertexAlpha = new Float32Array(4).fill(1);
        this.vertexTint = new Uint32Array(4).fill(0xffffff);
        this.type = 'Sprite';
        this.setTexture(texture, frame);
        this.setBounds(x, y, this.width, this.height);
    }
    getBounds(includeChildren = false) {
        if (this.dirtyRender) {
            this.updateVertices();
        }
        super.getBounds(includeChildren);
        return this.bounds;
    }
    setTexture(key, frame) {
        SetTexture(key, frame, this);
        return this;
    }
    setFrame(key) {
        SetFrame(key, this);
        return this;
    }
    isRenderable() {
        return (this.visible && this.willRender && this.hasTexture && this.alpha > 0);
    }
    updateVertices() {
        const data = this.vertexData;
        this.dirtyRender = false;
        const frame = this.frame;
        const originX = this.originX;
        const originY = this.originY;
        let w0;
        let w1;
        let h0;
        let h1;
        const [a, b, c, d, tx, ty] = this.worldTransform;
        if (frame.trimmed) {
            w1 = frame.spriteSourceSizeX - (originX * frame.sourceSizeWidth);
            w0 = w1 + frame.spriteSourceSizeWidth;
            h1 = frame.spriteSourceSizeY - (originY * frame.sourceSizeHeight);
            h0 = h1 + frame.spriteSourceSizeHeight;
        }
        else {
            w1 = -originX * frame.sourceSizeWidth;
            w0 = w1 + frame.sourceSizeWidth;
            h1 = -originY * frame.sourceSizeHeight;
            h0 = h1 + frame.sourceSizeHeight;
        }
        const x0 = (w1 * a) + (h1 * c) + tx;
        const y0 = (w1 * b) + (h1 * d) + ty;
        const x1 = (w1 * a) + (h0 * c) + tx;
        const y1 = (w1 * b) + (h0 * d) + ty;
        const x2 = (w0 * a) + (h0 * c) + tx;
        const y2 = (w0 * b) + (h0 * d) + ty;
        const x3 = (w0 * a) + (h1 * c) + tx;
        const y3 = (w0 * b) + (h1 * d) + ty;
        //  top left
        data[0] = x0;
        data[1] = y0;
        //  bottom left
        data[6] = x1;
        data[7] = y1;
        //  bottom right
        data[12] = x2;
        data[13] = y2;
        //  top right
        data[18] = x3;
        data[19] = y3;
        const bounds = this.bounds;
        bounds.x = Math.min(x0, x1, x2, x3);
        bounds.y = Math.min(y0, y1, y2, y3);
        bounds.right = Math.max(x0, x1, x2, x3);
        bounds.bottom = Math.max(y0, y1, y2, y3);
    }
    uploadBuffers(F32, U32, offset, setTexture = true) {
        //  Skip all of this if not dirty
        if (this.dirtyRender) {
            this.updateVertices();
        }
        const data = this.vertexData;
        const textureIndex = this.texture.glIndex;
        //  Do we have a different texture ID?
        if (setTexture && textureIndex !== this._prevTextureID) {
            this._prevTextureID = textureIndex;
            data[4] = textureIndex;
            data[10] = textureIndex;
            data[16] = textureIndex;
            data[22] = textureIndex;
        }
        //  Copy the data to the array buffer
        F32.set(data, offset);
        const color = this.vertexColor;
        //  Copy the vertex colors to the Uint32 view (as the data copy above overwrites them)
        U32[offset + 5] = color[0];
        U32[offset + 11] = color[2];
        U32[offset + 17] = color[3];
        U32[offset + 23] = color[1];
    }
    destroy(reparentChildren) {
        super.destroy(reparentChildren);
        this.texture = null;
        this.frame = null;
        this.hasTexture = false;
        this.vertexData = null;
        this.vertexColor = null;
        this.vertexAlpha = null;
        this.vertexTint = null;
    }
    get tint() {
        return this._tint;
    }
    set tint(value) {
        this._tint = value;
        // this.setTint(value);
    }
}
/*
    vertexData array structure:

    0 = topLeft.x
    1 = topLeft.y
    2 = frame.u0
    3 = frame.v0
    4 = textureIndex
    5 = topLeft.packedColor

    6 = bottomLeft.x
    7 = bottomLeft.y
    8 = frame.u0
    9 = frame.v1
    10 = textureIndex
    11 = bottomLeft.packedColor

    12 = bottomRight.x
    13 = bottomRight.y
    14 = frame.u1
    15 = frame.v1
    16 = textureIndex
    17 = bottomRight.packedColor

    18 = topRight.x
    19 = topRight.y
    20 = frame.u1
    21 = frame.v0
    22 = textureIndex
    23 = topRight.packedColor
*/
//# sourceMappingURL=Sprite.js.map