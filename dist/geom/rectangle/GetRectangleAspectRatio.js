function GetRectangleAspectRatio(rect) {
    return (rect.height === 0) ? NaN : rect.width / rect.height;
}

export { GetRectangleAspectRatio };
