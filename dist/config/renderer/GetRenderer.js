import {CONFIG_DEFAULTS} from "../const";
import {ConfigStore as ConfigStore2} from "../ConfigStore";
export function GetRenderer() {
  return ConfigStore2.get(CONFIG_DEFAULTS.RENDERER);
}
