import {CONFIG_DEFAULTS} from "../const";
import {ConfigStore as ConfigStore2} from "../ConfigStore";
export function SetBackgroundColor(color) {
  ConfigStore2.set(CONFIG_DEFAULTS.BACKGROUND_COLOR, color);
}
