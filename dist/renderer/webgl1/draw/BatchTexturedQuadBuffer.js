function BatchTexturedQuadBuffer(batch, renderer) {
    const texture = batch.texture;
    const shader = renderer.shaders.current;
    const buffer = shader.buffer;
    renderer.flush();
    renderer.textures.request(texture);
    batch.updateTextureIndex();
    const gl = renderer.gl;
    shader.bindBuffers(batch.indexBuffer, batch.vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, batch.data, gl.STATIC_DRAW);
    gl.drawElements(gl.TRIANGLES, batch.count * buffer.quadIndexSize, gl.UNSIGNED_SHORT, 0);
    shader.prevCount = batch.count;
    renderer.flushTotal++;
    shader.bindBuffers(buffer.indexBuffer, buffer.vertexBuffer);
}

export { BatchTexturedQuadBuffer };
