function DrawTexturedQuad(sprite, renderer) {
    const frame = sprite.frame;
    if (!frame) {
        return;
    }
    const ctx = renderer.ctx;
    const transform = sprite.transform;
    const { a, b, c, d, tx, ty } = transform.world;
    const { x, y } = transform.extent;
    ctx.save();
    ctx.setTransform(a, b, c, d, tx, ty);
    ctx.globalAlpha = sprite.alpha;
    ctx.drawImage(frame.texture.image, frame.x, frame.y, frame.width, frame.height, x, y, frame.width, frame.height);
    ctx.restore();
}

export { DrawTexturedQuad };
