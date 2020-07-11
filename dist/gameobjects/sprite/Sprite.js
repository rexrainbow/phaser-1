import {BatchTexturedQuad as BatchTexturedQuad2} from "../../renderer/webgl1/draw/BatchTexturedQuad";
import {Container as Container2} from "../container/Container";
import {DIRTY_CONST as DIRTY_CONST2} from "../DIRTY_CONST";
import {DrawTexturedQuad as DrawTexturedQuad2} from "../../renderer/canvas/draw/DrawTexturedQuad";
import {PackColors as PackColors2} from "../../renderer/webgl1/colors/PackColors";
import {SetFrame as SetFrame2} from "./SetFrame";
import {SetTexture as SetTexture2} from "./SetTexture";
import {UpdateVertices as UpdateVertices2} from "./UpdateVertices";
import {Vertex as Vertex2} from "../components/Vertex";
export class Sprite extends Container2 {
  constructor(x, y, texture, frame) {
    super(x, y);
    this.hasTexture = false;
    this._tint = 16777215;
    this.type = "Sprite";
    this.vertices = [new Vertex2(), new Vertex2(), new Vertex2(), new Vertex2()];
    this.setTexture(texture, frame);
  }
  setTexture(key, frame) {
    SetTexture2(key, frame, this);
    return this;
  }
  setFrame(key) {
    SetFrame2(this.texture, key, this);
    return this;
  }
  isRenderable() {
    return this.visible && this.willRender && this.hasTexture && this.alpha > 0;
  }
  preRender() {
    if (this.isDirty(DIRTY_CONST2.COLORS)) {
      PackColors2(this);
      this.clearDirty(DIRTY_CONST2.COLORS);
    }
    if (this.isDirty(DIRTY_CONST2.TRANSFORM)) {
      UpdateVertices2(this);
      this.clearDirty(DIRTY_CONST2.TRANSFORM);
    }
  }
  renderGL(renderPass) {
    this.preRender();
    BatchTexturedQuad2(this, renderPass);
  }
  renderCanvas(renderer) {
    this.preRender();
    DrawTexturedQuad2(this, renderer);
  }
  get alpha() {
    return this._alpha;
  }
  set alpha(value) {
    if (value !== this._alpha) {
      this._alpha = value;
      this.vertices.forEach((vertex) => {
        vertex.setAlpha(value);
      });
      this.setDirty(DIRTY_CONST2.COLORS);
    }
  }
  get tint() {
    return this._tint;
  }
  set tint(value) {
    if (value !== this._tint) {
      this._tint = value;
      this.vertices.forEach((vertex) => {
        vertex.setTint(value);
      });
      this.setDirty(DIRTY_CONST2.COLORS);
    }
  }
  destroy(reparentChildren) {
    super.destroy(reparentChildren);
    this.texture = null;
    this.frame = null;
    this.hasTexture = false;
    this.vertices = [];
  }
}
