import {CONFIG_DEFAULTS} from "../const";
import {ConfigStore as ConfigStore2} from "../ConfigStore";
export function GetResolution() {
  return ConfigStore2.get(CONFIG_DEFAULTS.SIZE).resolution;
}
