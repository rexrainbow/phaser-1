function SetSkew(skewX, skewY, ...children) {
    children.forEach(child => {
        child.setSkew(skewX, skewY);
    });
    return children;
}

export { SetSkew };
