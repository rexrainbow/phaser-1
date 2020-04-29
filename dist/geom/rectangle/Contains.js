function Contains(rect, x, y) {
    if (rect.width <= 0 || rect.height <= 0) {
        return false;
    }
    return (rect.x <= x && rect.x + rect.width >= x && rect.y <= y && rect.y + rect.height >= y);
}

export { Contains };
