function CalculateTotalRenderable(entry, renderData) {
    renderData.numRendered++;
    renderData.numRenderable++;
    if (entry.node.dirtyFrame >= renderData.gameFrame) {
        renderData.dirtyFrame++;
    }
    entry.children.forEach(child => {
        if (child.children.length > 0) {
            CalculateTotalRenderable(child, renderData);
        }
    });
}

export { CalculateTotalRenderable };
