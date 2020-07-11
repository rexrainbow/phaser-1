import {FlushBuffer} from "../../renderer/webgl1/renderpass";
import {GameObject3D as GameObject3D2} from "../GameObject3D";
import {Material as Material2} from "../material/Material";
import {SetTexture as RequestTexture} from "../../renderer/webgl1/renderpass/SetTexture";
import {SetFrame as SetFrame2} from "./SetFrame";
import {SetTexture as SetTexture3} from "./SetTexture";
export class Mesh extends GameObject3D2 {
  constructor(x = 0, y = 0, z = 0, geometry, material = new Material2()) {
    super(x, y, z);
    this.hasTexture = false;
    this.cullFaces = true;
    this.geometry = geometry;
    this.material = material;
    this.setTexture("__WHITE");
  }
  setTexture(key, frame) {
    SetTexture3(key, frame, this);
    return this;
  }
  setFrame(key) {
    SetFrame2(this.texture, key, this);
    return this;
  }
  setMaterial(material) {
    this.material = material;
    return this;
  }
  renderGL(renderPass) {
    const shader = renderPass.currentShader.shader;
    shader.setUniform("uModelMatrix", this.transform.local.data);
    shader.setUniform("uNormalMatrix", this.transform.normal.data);
    if (this.hasTexture) {
      const textureIndex = RequestTexture(renderPass, this.texture);
      shader.setUniform("uTexture", textureIndex);
    }
    this.material.setUniforms(shader);
    FlushBuffer(renderPass, this.geometry.buffer);
  }
  destroy(reparentChildren) {
    super.destroy(reparentChildren);
    this.geometry = null;
    this.material = null;
    this.texture = null;
    this.frame = null;
    this.hasTexture = false;
  }
}
