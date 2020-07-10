function CeilRectanglePosition(rect) {
    rect.x = Math.ceil(rect.x);
    rect.y = Math.ceil(rect.y);
    return rect;
}

export { CeilRectanglePosition };
