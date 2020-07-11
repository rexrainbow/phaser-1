import * as GameObjectEvents from "../gameobjects/events";
import * as World3DEvents from "./events";
import {Emit, Off, On, Once} from "../events";
import {BuildRenderList as BuildRenderList2} from "./BuildRenderList";
import {GameObject3D as GameObject3D2} from "../gameobjects3d/GameObject3D";
import {MergeRenderData as MergeRenderData2} from "./MergeRenderData";
import {RemoveChildren3D as RemoveChildren3D2} from "../display3d/RemoveChildren3D";
import {ResetWorld3DRenderData as ResetWorld3DRenderData2} from "./ResetWorld3DRenderData";
export class BaseWorld3D extends GameObject3D2 {
  constructor(scene) {
    super();
    this.forceRefresh = false;
    this.is3D = true;
    this.type = "BaseWorld";
    this.scene = scene;
    this.world = this;
    this.events = new Map();
    this.renderList = [];
    this._updateListener = On(scene, "update", (delta, time) => this.update(delta, time));
    this._renderListener = On(scene, "render", (renderData) => this.render(renderData));
    this._shutdownListener = On(scene, "shutdown", () => this.shutdown());
    Once(scene, "destroy", () => this.destroy());
  }
  update(delta, time) {
    if (!this.willUpdate) {
      return;
    }
    Emit(this, GameObjectEvents.UpdateEvent, delta, time, this);
    super.update(delta, time);
  }
  postUpdate(delta, time) {
    Emit(this, GameObjectEvents.PostUpdateEvent, delta, time, this);
  }
  render(sceneRenderData) {
    const renderData = this.renderData;
    ResetWorld3DRenderData2(renderData, sceneRenderData.gameFrame);
    if (!this.willRender || !this.visible) {
      return;
    }
    BuildRenderList2(this);
    Emit(this, World3DEvents.World3DRenderEvent, renderData, this);
    MergeRenderData2(sceneRenderData, renderData);
  }
  renderNode(entry, renderPass) {
    entry.node.renderGL(renderPass);
    entry.children.forEach((child) => {
      if (child.children.length > 0) {
        this.renderNode(child, renderPass);
      } else {
        child.node.renderGL(renderPass);
      }
    });
    entry.node.postRenderGL(renderPass);
  }
  shutdown() {
    const scene = this.scene;
    Off(scene, "update", this._updateListener);
    Off(scene, "render", this._renderListener);
    Off(scene, "shutdown", this._shutdownListener);
    RemoveChildren3D2(this);
    Emit(this, World3DEvents.World3DShutdownEvent, this);
    ResetWorld3DRenderData2(this.renderData, 0);
  }
  destroy(reparentChildren) {
    super.destroy(reparentChildren);
    Emit(this, GameObjectEvents.DestroyEvent, this);
    ResetWorld3DRenderData2(this.renderData, 0);
    this.events.clear();
    this.camera = null;
    this.renderData = null;
    this.events = null;
  }
}
