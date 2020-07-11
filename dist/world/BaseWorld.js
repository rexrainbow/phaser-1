import * as GameObjectEvents from "../gameobjects/events";
import * as WorldEvents from "./events";
import {Begin, Flush} from "../renderer/webgl1/renderpass";
import {Emit, Off, On, Once} from "../events";
import {BuildRenderList as BuildRenderList2} from "./BuildRenderList";
import {ExactEquals as ExactEquals2} from "../math/matrix2d/ExactEquals";
import {GameObject} from "../gameobjects";
import {MergeRenderData as MergeRenderData2} from "./MergeRenderData";
import {RemoveChildren} from "../display";
import {ResetWorldRenderData as ResetWorldRenderData2} from "./ResetWorldRenderData";
export class BaseWorld extends GameObject {
  constructor(scene) {
    super();
    this.forceRefresh = false;
    this.is3D = false;
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
    ResetWorldRenderData2(renderData, sceneRenderData.gameFrame);
    if (!this.willRender || !this.visible) {
      return;
    }
    BuildRenderList2(this);
    Emit(this, WorldEvents.WorldRenderEvent, renderData, this);
    MergeRenderData2(sceneRenderData, renderData);
    this.camera.dirtyRender = false;
  }
  renderGL(renderPass) {
    const currentCamera = renderPass.current2DCamera;
    const camera = this.camera;
    if (!currentCamera || !ExactEquals2(camera.worldTransform, currentCamera.worldTransform)) {
      Flush(renderPass);
    }
    Begin(renderPass, camera);
    this.renderList.forEach((entry) => {
      if (entry.children.length > 0) {
        this.renderNode(entry, renderPass);
      } else {
        entry.node.renderGL(renderPass);
      }
    });
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
  postRenderGL(renderPass) {
  }
  shutdown() {
    const scene = this.scene;
    Off(scene, "update", this._updateListener);
    Off(scene, "render", this._renderListener);
    Off(scene, "shutdown", this._shutdownListener);
    RemoveChildren(this);
    Emit(this, WorldEvents.WorldShutdownEvent, this);
    ResetWorldRenderData2(this.renderData, 0);
    if (this.camera) {
      this.camera.reset();
    }
  }
  destroy(reparentChildren) {
    super.destroy(reparentChildren);
    Emit(this, GameObjectEvents.DestroyEvent, this);
    ResetWorldRenderData2(this.renderData, 0);
    if (this.camera) {
      this.camera.destroy();
    }
    this.events.clear();
    this.camera = null;
    this.renderData = null;
    this.events = null;
  }
}
