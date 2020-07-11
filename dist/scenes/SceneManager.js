import {Emit, Once} from "../events";
import {CreateSceneRenderData as CreateSceneRenderData2} from "./CreateSceneRenderData";
import {GameInstance as GameInstance2} from "../GameInstance";
import {GetScenes} from "../config/scenes";
import {ResetSceneRenderData as ResetSceneRenderData2} from "./ResetSceneRenderData";
import {SceneManagerInstance as SceneManagerInstance2} from "./SceneManagerInstance";
export class SceneManager {
  constructor() {
    this.scenes = new Map();
    this.sceneIndex = 0;
    this.flush = false;
    this.renderResult = CreateSceneRenderData2();
    this.game = GameInstance2.get();
    SceneManagerInstance2.set(this);
    Once(this.game, "boot", () => this.boot());
  }
  boot() {
    GetScenes().forEach((scene) => new scene());
  }
  update(delta, time) {
    for (const scene of this.scenes.values()) {
      Emit(scene, "update", delta, time);
    }
  }
  render(gameFrame) {
    const results = this.renderResult;
    ResetSceneRenderData2(results, gameFrame);
    for (const scene of this.scenes.values()) {
      Emit(scene, "render", results);
    }
    if (this.flush) {
      results.numDirtyFrames++;
      this.flush = false;
    }
    return results;
  }
}
