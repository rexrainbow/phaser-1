import { GetVertices } from '../components/transform/GetVertices.js';

function UpdateVertices(sprite) {
    const data = sprite.vertexData;
    const { x0, y0, x1, y1, x2, y2, x3, y3 } = GetVertices(sprite.transform);
    data[0] = x0;
    data[1] = y0;
    data[6] = x1;
    data[7] = y1;
    data[12] = x2;
    data[13] = y2;
    data[18] = x3;
    data[19] = y3;
    return sprite;
}

export { UpdateVertices };
