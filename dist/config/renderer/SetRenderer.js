import {CONFIG_DEFAULTS} from "../const";
import {ConfigStore as ConfigStore2} from "../ConfigStore";
export function SetRenderer(renderer) {
  ConfigStore2.set(CONFIG_DEFAULTS.RENDERER, renderer);
}
