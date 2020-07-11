import {GetConfigValue as GetConfigValue2} from "./GetConfigValue";
import {SceneManagerInstance as SceneManagerInstance2} from "./SceneManagerInstance";
export function Install(scene, config = {}) {
  const sceneManager = SceneManagerInstance2.get();
  const size = sceneManager.scenes.size;
  const sceneIndex = sceneManager.sceneIndex;
  const firstScene = size === 0;
  if (typeof config === "string") {
    scene.key = config;
  } else if (config || !config && firstScene) {
    scene.key = GetConfigValue2(config, "key", "scene" + sceneIndex.toString());
  }
  if (sceneManager.scenes.has(scene.key)) {
    console.warn("Scene key already in use: " + scene.key);
  } else {
    sceneManager.scenes.set(scene.key, scene);
    sceneManager.flush = true;
    sceneManager.sceneIndex++;
  }
}
