import { IRenderPass } from '../renderpass/IRenderPass';
import { ISpriteBatch } from '../../../gameobjects/spritebatch/ISpriteBatch';

export function BatchTexturedQuadBuffer <T extends ISpriteBatch> (batch: T, renderPass: IRenderPass): void
{
    /*
    const texture = batch.texture;
    const shader = renderer.shaders.current;
    const buffer = shader.buffer;

    renderer.flush();

    renderer.textures.request(texture);

    batch.updateTextureIndex();

    //const gl = renderer.gl; - use GL.gl

    shader.setBuffers(batch.vertexBuffer, batch.indexBuffer);

    gl.bufferData(gl.ARRAY_BUFFER, batch.data, gl.STATIC_DRAW);

    gl.drawElements(gl.TRIANGLES, batch.count * buffer.entryIndexSize, gl.UNSIGNED_SHORT, 0);

    shader.prevCount = batch.count;

    renderer.flushTotal++;

    //  Restore
    shader.bindBuffers();
    */
}
