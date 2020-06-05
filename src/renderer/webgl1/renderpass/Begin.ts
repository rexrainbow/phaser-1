import { IRenderPass } from './IRenderPass';

export function Begin (renderPass: IRenderPass): void
{
    const renderer = renderPass.renderer;

    renderPass.defaultShader.shader.bind(renderer.projectionMatrix, renderer.currentCamera.matrix);

    //  Binds default shader and setsUniforms
    // this.shader.setDefault();

    //  Binds default vertex buffer
    // this.buffer.setDefault();

    //  Sets shader attributes
    // this.shader.current.setAttributes(this.buffer.current.vertexByteSize);

    renderPass.count = 0;
}
