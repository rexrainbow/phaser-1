function SetFrame(texture, key, ...children) {
    const frame = texture.getFrame(key);
    const { u0, u1, v0, v1, pivot } = frame;
    children.forEach(child => {
        if (!child || frame === child.frame) {
            return;
        }
        child.frame = frame;
        if (pivot) {
            child.setOrigin(pivot.x, pivot.y);
        }
        child.frame.setExtent(child);
        child.hasTexture = true;
        const data = child.vertexData;
        data[2] = u0;
        data[3] = v0;
        data[8] = u0;
        data[9] = v1;
        data[14] = u1;
        data[15] = v1;
        data[20] = u1;
        data[21] = v0;
    });
    return children;
}

export { SetFrame };
