function SetScale(scaleX, scaleY, ...children) {
    children.forEach(child => {
        child.setScale(scaleX, scaleY);
    });
    return children;
}

export { SetScale };
