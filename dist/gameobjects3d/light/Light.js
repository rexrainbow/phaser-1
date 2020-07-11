import {RGBCallback, Vec3Callback} from "../../math/vec3";
export class Light {
  constructor(config = {}) {
    this.isDirty = false;
    const {
      x = 0,
      y = 0,
      z = 0.1,
      ambient = [1, 1, 1],
      diffuse = [1, 1, 1],
      specular = [1, 1, 1]
    } = config;
    const onChange = () => this.update();
    this.position = new Vec3Callback(onChange, x, y, z);
    this.ambient = new RGBCallback(onChange).fromArray(ambient);
    this.diffuse = new RGBCallback(onChange).fromArray(diffuse);
    this.specular = new RGBCallback(onChange).fromArray(specular);
  }
  setUniforms(shader) {
    shader.setUniform("uLightPosition", this.position.toArray());
    shader.setUniform("uLightAmbient", this.ambient.toArray());
    shader.setUniform("uLightDiffuse", this.diffuse.toArray());
    shader.setUniform("uLightSpecular", this.specular.toArray());
  }
  update() {
    this.isDirty = true;
  }
  destroy() {
    this.position.destroy();
    this.ambient.destroy();
    this.diffuse.destroy();
    this.specular.destroy();
  }
}
