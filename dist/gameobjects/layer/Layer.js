import {GameObject as GameObject2} from "../GameObject";
export class Layer extends GameObject2 {
  constructor() {
    super();
    this.type = "Layer";
    this.transform.passthru = true;
    this.willRender = false;
  }
}
