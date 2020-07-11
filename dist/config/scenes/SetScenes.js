import {CONFIG_DEFAULTS} from "../const";
import {ConfigStore as ConfigStore2} from "../ConfigStore";
export function SetScenes(scenes) {
  ConfigStore2.set(CONFIG_DEFAULTS.SCENES, [].concat(scenes));
}
