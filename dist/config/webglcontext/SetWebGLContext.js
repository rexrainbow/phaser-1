import {CONFIG_DEFAULTS} from "../const";
import {ConfigStore as ConfigStore2} from "../ConfigStore";
export function SetWebGLContext(contextAttributes) {
  ConfigStore2.set(CONFIG_DEFAULTS.WEBGL_CONTEXT, contextAttributes);
}
