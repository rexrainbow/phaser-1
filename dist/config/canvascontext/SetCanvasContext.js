import {CONFIG_DEFAULTS} from "../const";
import {ConfigStore as ConfigStore2} from "../ConfigStore";
export function SetCanvasContext(contextAttributes) {
  ConfigStore2.set(CONFIG_DEFAULTS.CANVAS_CONTEXT, contextAttributes);
}
