import {BaseWorld as BaseWorld2} from "./BaseWorld";
import {CreateWorldRenderData as CreateWorldRenderData2} from "./CreateWorldRenderData";
import {StaticCamera as StaticCamera2} from "../camera/StaticCamera";
export class StaticWorld extends BaseWorld2 {
  constructor(scene) {
    super(scene);
    this.type = "StaticWorld";
    this.camera = new StaticCamera2();
    this.renderData = CreateWorldRenderData2(this, this.camera);
  }
}
