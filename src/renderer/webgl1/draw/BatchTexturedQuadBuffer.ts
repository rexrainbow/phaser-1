import { ISpriteBatch } from '../../../gameobjects/spritebatch/ISpriteBatch';
import { IWebGLRenderer } from '../IWebGLRenderer';

export function BatchTexturedQuadBuffer <T extends ISpriteBatch> (batch: T, renderer: IWebGLRenderer): void
{
    const texture = batch.texture;
    const shader = renderer.currentShader;
    const binding = texture.binding;

    shader.flush(renderer);

    if (binding.indexCounter < renderer.startActiveTexture)
    {
        renderer.requestTexture(texture);
    }

    batch.updateTextureIndex();

    const gl = renderer.gl;

    shader.bindBuffers(batch.indexBuffer, batch.vertexBuffer);

    gl.bufferData(gl.ARRAY_BUFFER, batch.data, gl.STATIC_DRAW);

    gl.drawElements(gl.TRIANGLES, batch.count * shader.quadIndexSize, gl.UNSIGNED_SHORT, 0);

    shader.prevCount = batch.count;

    renderer.flushTotal++;

    //  Restore
    shader.bindBuffers(shader.indexBuffer, shader.vertexBuffer);
}
