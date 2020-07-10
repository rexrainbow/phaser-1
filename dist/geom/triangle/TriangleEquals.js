function TriangleEquals(src, dest) {
    return (src.x1 === dest.x1 &&
        src.y1 === dest.y1 &&
        src.x2 === dest.x2 &&
        src.y2 === dest.y2 &&
        src.x3 === dest.x3 &&
        src.y3 === dest.y3);
}

export { TriangleEquals };
