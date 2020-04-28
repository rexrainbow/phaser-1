import { Container } from '../container/Container';
import { Frame } from '../../textures/Frame';
import { IGameObject } from '../gameobject/IGameObject';
import { SetFrame } from './SetFrame';
import { SetTexture } from './SetTexture';
import { Texture } from '../../textures/Texture';

export class Sprite extends Container
{
    texture: Texture;
    frame: Frame;
    hasTexture: boolean = false;

    vertexData: Float32Array;
    vertexColor: Uint32Array;

    vertexAlpha: Float32Array;
    vertexTint: Uint32Array;

    prevTextureID: number = -1;

    private _tint: number = 0xffffff;

    constructor (x: number, y: number, texture: string | Texture, frame?: string | number)
    {
        super(x, y);

        this.vertexData = new Float32Array(24).fill(0);
        this.vertexColor = new Uint32Array(4).fill(4294967295);

        this.vertexAlpha = new Float32Array(4).fill(1);
        this.vertexTint = new Uint32Array(4).fill(0xffffff);

        this.type = 'Sprite';
        this.setTexture(texture, frame);

        this.bounds.setArea(x, y, this.width, this.height);
    }

    /*
    getBounds (includeChildren: boolean = false): Rectangle
    {
        if (this.dirtyRender)
        {
            this.updateVertices();
        }

        super.getBounds(includeChildren);

        return this.bounds;
    }
    */

    setTexture (key: string | Texture, frame?: string | number): this
    {
        SetTexture(key, frame, this);

        return this;
    }

    setFrame (key?: string | number | Frame): this
    {
        SetFrame(this.texture, key, this);

        return this;
    }

    isRenderable (): boolean
    {
        return (this.visible && this.willRender && this.hasTexture && this.alpha > 0);
    }

    updateVertices (): void
    {
        const data = this.vertexData;

        this.dirty.render = false;

        const frame = this.frame;
        const originX = this.originX;
        const originY = this.originY;

        let w0: number;
        let w1: number;
        let h0: number;
        let h1: number;

        const { a, b, c, d, tx, ty } = this.transform.world;

        if (frame.trimmed)
        {
            w1 = frame.spriteSourceSizeX - (originX * frame.sourceSizeWidth);
            w0 = w1 + frame.spriteSourceSizeWidth;

            h1 = frame.spriteSourceSizeY - (originY * frame.sourceSizeHeight);
            h0 = h1 + frame.spriteSourceSizeHeight;
        }
        else
        {
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

        const boundsX = Math.min(x0, x1, x2, x3);
        const boundsY = Math.min(y0, y1, y2, y3);
        const boundsRight = Math.max(x0, x1, x2, x3);
        const boundsBottom = Math.max(y0, y1, y2, y3);

        this.bounds.setArea(boundsX, boundsY, boundsRight, boundsBottom);
    }

    get tint (): number
    {
        return this._tint;
    }

    set tint (value: number)
    {
        this._tint = value;

        // this.setTint(value);
    }

    destroy (reparentChildren?: IGameObject): void
    {
        super.destroy(reparentChildren);

        this.texture = null;
        this.frame = null;
        this.hasTexture = false;
        this.vertexData = null;
        this.vertexColor = null;
        this.vertexAlpha = null;
        this.vertexTint = null;
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
