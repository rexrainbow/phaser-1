import {BaseWorld as BaseWorld2} from "./BaseWorld";
import {Camera as Camera2} from "../camera/Camera";
import {CreateWorldRenderData as CreateWorldRenderData2} from "./CreateWorldRenderData";
export class World extends BaseWorld2 {
  constructor(scene) {
    super(scene);
    this.enableCameraCull = true;
    this.type = "World";
    this.camera = new Camera2();
    this.renderData = CreateWorldRenderData2(this, this.camera);
  }
}
