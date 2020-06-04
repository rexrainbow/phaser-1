import { PopFramebuffer } from './PopFramebuffer';
import { RenderPass } from './RenderPass';
import { SetFramebuffer } from './SetFramebuffer';

export function Draw (renderPass: RenderPass): void
{
    const count = renderPass.count;

    if (count === 0)
    {
        return;
    }

    const renderer = renderPass.renderer;

    const currentBuffer = renderPass.currentVertexBuffer;
    const currentShader = renderPass.currentShader;

    const renderToFramebuffer = currentShader.shader.renderToFramebuffer;

    const gl = renderer.gl;

    if (renderToFramebuffer)
    {
        SetFramebuffer(renderPass, currentShader.shader.framebuffer, true);
    }

    if (count === currentBuffer.batchSize)
    {
        gl.bufferData(gl.ARRAY_BUFFER, currentBuffer.data, gl.DYNAMIC_DRAW);
    }
    else
    {
        const subsize = (currentBuffer.indexed) ? count * currentBuffer.entryElementSize : count * currentBuffer.vertexElementSize;

        const view = currentBuffer.vertexViewF32.subarray(0, subsize);

        gl.bufferSubData(gl.ARRAY_BUFFER, 0, view);
    }

    if (currentBuffer.indexed)
    {
        gl.drawElements(gl.TRIANGLES, count * currentBuffer.entryIndexSize, gl.UNSIGNED_SHORT, 0);
    }
    else
    {
        gl.drawArrays(gl.TRIANGLES, 0, count);
    }

    if (renderToFramebuffer)
    {
        PopFramebuffer(renderPass);
    }
}
