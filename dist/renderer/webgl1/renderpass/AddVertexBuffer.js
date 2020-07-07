function AddVertexBuffer(renderPass, buffer) {
    renderPass.vertexBufferStack.push(buffer);
    return buffer;
}

export { AddVertexBuffer };
