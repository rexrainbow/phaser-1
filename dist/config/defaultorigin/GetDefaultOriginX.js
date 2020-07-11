import {CONFIG_DEFAULTS} from "../const";
import {ConfigStore as ConfigStore2} from "../ConfigStore";
export function GetDefaultOriginX() {
  return ConfigStore2.get(CONFIG_DEFAULTS.DEFAULT_ORIGIN).x;
}
