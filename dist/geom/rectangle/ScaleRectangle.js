function ScaleRectangle(rect, x, y = x) {
    rect.width *= x;
    rect.height *= y;
    return rect;
}

export { ScaleRectangle };
