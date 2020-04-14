export default function RenderWebGL(sprite, renderer, shader, startActiveTexture) {
    const texture = sprite.texture;
    if (texture.glIndexCounter < startActiveTexture) {
        renderer.requestTexture(texture);
    }
    if (shader.count === shader.batchSize) {
        shader.flush();
    }
    sprite.uploadBuffers(shader.vertexViewF32, shader.vertexViewU32, shader.count * shader.quadElementSize);
    shader.count++;
}
//# sourceMappingURL=RenderWebGL.js.map