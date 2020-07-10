function EllipseEquals(ellipse, toCompare) {
    return (ellipse.x === toCompare.x &&
        ellipse.y === toCompare.y &&
        ellipse.width === toCompare.width &&
        ellipse.height === toCompare.height);
}

export { EllipseEquals };
