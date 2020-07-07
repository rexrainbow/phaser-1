function SetPosition(x, y, ...children) {
    children.forEach(child => {
        child.setPosition(x, y);
    });
    return children;
}

export { SetPosition };
