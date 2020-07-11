import {GameInstance as GameInstance2} from "../GameInstance";
import {Install as Install2} from "./Install";
export class Scene {
  constructor(config) {
    this.game = GameInstance2.get();
    this.events = new Map();
    Install2(this, config);
  }
}
