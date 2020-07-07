function SetAlpha(alpha, ...children) {
    children.forEach(child => {
        child.alpha = alpha;
    });
    return children;
}

export { SetAlpha };
