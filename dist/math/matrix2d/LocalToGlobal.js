import Vec2 from '../vec2/Vec2';
export default function LocalToGlobal(mat, x, y, outPoint = new Vec2()) {
    const { a, b, c, d, tx, ty } = mat;
    outPoint.x = (a * x) + (c * y) + tx;
    outPoint.y = (b * x) + (d * y) + ty;
    return outPoint;
}
//# sourceMappingURL=LocalToGlobal.js.map