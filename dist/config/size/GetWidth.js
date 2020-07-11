import {CONFIG_DEFAULTS} from "../const";
import {ConfigStore as ConfigStore2} from "../ConfigStore";
export function GetWidth() {
  return ConfigStore2.get(CONFIG_DEFAULTS.SIZE).width;
}
