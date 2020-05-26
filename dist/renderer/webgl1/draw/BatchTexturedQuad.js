function BatchTexturedQuad(sprite, renderer) {
    const texture = sprite.texture;
    const shader = renderer.shaders.current;
    const buffer = shader.buffer;
    const binding = texture.binding;
    if (shader.count === buffer.batchSize) {
        renderer.flush();
    }
    const data = sprite.vertexData;
    renderer.textures.request(texture);
    const textureIndex = binding.index;
    data[4] = textureIndex;
    data[10] = textureIndex;
    data[16] = textureIndex;
    data[22] = textureIndex;
    const offset = shader.count * buffer.quadElementSize;
    buffer.vertexViewF32.set(data, offset);
    const color = sprite.vertexColor;
    const U32 = buffer.vertexViewU32;
    U32[offset + 5] = color[0];
    U32[offset + 11] = color[2];
    U32[offset + 17] = color[3];
    U32[offset + 23] = color[1];
    shader.count++;
}

export { BatchTexturedQuad };
