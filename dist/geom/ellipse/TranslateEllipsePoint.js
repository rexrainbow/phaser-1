function TranslateEllipsePoint(ellipse, point) {
    ellipse.x += point.x;
    ellipse.y += point.y;
    return ellipse;
}

export { TranslateEllipsePoint };
