import {DefaultQuadAttributes as DefaultQuadAttributes2} from "./DefaultQuadAttributes";
import {Shader as Shader2} from "./Shader";
export class QuadShader extends Shader2 {
  constructor(config = {}) {
    const shaderConfig = config;
    shaderConfig.attributes = !shaderConfig.attributes ? DefaultQuadAttributes2 : shaderConfig.attributes;
    super(shaderConfig);
  }
  bind(renderPass) {
    const uniforms = this.uniforms;
    uniforms.set("uProjectionMatrix", renderPass.projectionMatrix.data);
    uniforms.set("uCameraMatrix", renderPass.cameraMatrix.data);
    return super.bind(renderPass);
  }
}
