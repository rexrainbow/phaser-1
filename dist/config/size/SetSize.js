import {CONFIG_DEFAULTS} from "../const";
import {ConfigStore as ConfigStore2} from "../ConfigStore";
export function SetSize(width = 800, height = 600, resolution = 1) {
  if (resolution === 0) {
    resolution = window.devicePixelRatio;
  }
  ConfigStore2.set(CONFIG_DEFAULTS.SIZE, {width, height, resolution});
}
