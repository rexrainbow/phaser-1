function SetBounds(x, y, width, height, ...children) {
    children.forEach(child => {
        child.bounds.set(x, y, width, height);
    });
    return children;
}

export { SetBounds };
