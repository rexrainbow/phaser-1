import {CONFIG_DEFAULTS} from "../const";
import {ConfigStore as ConfigStore2} from "../ConfigStore";
export function SetDefaultOrigin(x = 0.5, y = x) {
  ConfigStore2.set(CONFIG_DEFAULTS.DEFAULT_ORIGIN, {x, y});
}
