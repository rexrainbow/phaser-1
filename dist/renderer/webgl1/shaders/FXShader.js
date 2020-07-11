import {DefaultQuadAttributes as DefaultQuadAttributes2} from "./DefaultQuadAttributes";
import {QuadShader as QuadShader2} from "./QuadShader";
export class FXShader extends QuadShader2 {
  constructor(config = {}) {
    const shaderConfig = config;
    shaderConfig.attributes = !shaderConfig.attributes ? DefaultQuadAttributes2 : shaderConfig.attributes;
    shaderConfig.renderToFramebuffer = true;
    super(shaderConfig);
  }
  bind(renderPass) {
    const renderer = renderPass.renderer;
    this.uniforms.set("uTime", performance.now());
    this.uniforms.set("uResolution", [renderer.width, renderer.height]);
    return super.bind(renderPass);
  }
}
