import {BoundsComponent as BoundsComponent2} from "./components/bounds/BoundsComponent";
import {DIRTY_CONST as DIRTY_CONST2} from "./DIRTY_CONST";
import {DestroyChildren as DestroyChildren2} from "../display/DestroyChildren";
import {DestroyEvent as DestroyEvent2} from "./events/DestroyEvent";
import {Emit} from "../events";
import {GameInstance as GameInstance2} from "../GameInstance";
import {InputComponent as InputComponent2} from "./components/input/InputComponent";
import {ReparentChildren as ReparentChildren2} from "../display/ReparentChildren";
import {TransformComponent as TransformComponent2} from "./components/transform/TransformComponent";
export class GameObject {
  constructor(x = 0, y = 0) {
    this.type = "GameObject";
    this.name = "";
    this.willUpdate = true;
    this.willUpdateChildren = true;
    this.willRender = true;
    this.willRenderChildren = true;
    this.willCacheChildren = false;
    this.dirty = 0;
    this.dirtyFrame = 0;
    this.visible = true;
    this.children = [];
    this.events = new Map();
    this.transform = new TransformComponent2(this, x, y);
    this.bounds = new BoundsComponent2(this);
    this.input = new InputComponent2(this);
    this.dirty = DIRTY_CONST2.DEFAULT;
    this.transform.update();
  }
  isRenderable() {
    return this.visible && this.willRender;
  }
  isDirty(flag) {
    return (this.dirty & flag) !== 0;
  }
  clearDirty(flag) {
    if (this.isDirty(flag)) {
      this.dirty ^= flag;
    }
    return this;
  }
  setDirty(flag, flag2) {
    if (!this.isDirty(flag)) {
      this.dirty ^= flag;
      this.dirtyFrame = GameInstance2.getFrame();
    }
    if (!this.isDirty(flag2)) {
      this.dirty ^= flag2;
    }
    return this;
  }
  update(delta, time) {
    if (this.willUpdateChildren) {
      const children = this.children;
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (child && child.willUpdate) {
          child.update(delta, time);
        }
      }
    }
    this.postUpdate(delta, time);
  }
  postUpdate(delta, time) {
  }
  renderGL(renderPass) {
  }
  renderCanvas(renderer) {
  }
  postRenderGL(renderPass) {
  }
  postRenderCanvas(renderer) {
  }
  get numChildren() {
    return this.children.length;
  }
  destroy(reparentChildren) {
    if (reparentChildren) {
      ReparentChildren2(this, reparentChildren);
    } else {
      DestroyChildren2(this);
    }
    Emit(this, DestroyEvent2, this);
    this.transform.destroy();
    this.bounds.destroy();
    this.input.destroy();
    this.events.clear();
    this.world = null;
    this.parent = null;
    this.children = null;
  }
}
