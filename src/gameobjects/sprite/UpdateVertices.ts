import { ISprite } from './ISprite';

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

export function UpdateVertices <T extends ISprite> (sprite: T): T
{
    const data = sprite.vertexData;

    const transform = sprite.transform;

    const { a, b, c, d, tx, ty } = transform.world;

    const w1 = transform.left;
    const w0 = transform.right;
    const h1 = transform.top;
    const h0 = transform.bottom;

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

    sprite.bounds.setArea(boundsX, boundsY, boundsRight, boundsBottom);

    return sprite;
}
