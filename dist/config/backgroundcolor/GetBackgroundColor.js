import {CONFIG_DEFAULTS} from "../const";
import {ConfigStore as ConfigStore2} from "../ConfigStore";
export function GetBackgroundColor() {
  return ConfigStore2.get(CONFIG_DEFAULTS.BACKGROUND_COLOR);
}
