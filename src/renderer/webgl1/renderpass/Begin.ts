import { RenderPass } from './RenderPass';

export function Begin (renderPass: RenderPass): void
{
    //  Binds default shader and setsUniforms
    // this.shader.setDefault();

    //  Binds default vertex buffer
    // this.buffer.setDefault();

    //  Sets shader attributes
    // this.shader.current.setAttributes(this.buffer.current.vertexByteSize);

    renderPass.count = 0;
}
