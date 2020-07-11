import {CONFIG_DEFAULTS} from "../const";
import {ConfigStore as ConfigStore2} from "../ConfigStore";
export function SetMaxTextures(max) {
  ConfigStore2.set(CONFIG_DEFAULTS.MAX_TEXTURES, max);
}
