import {CONFIG_DEFAULTS} from "../const";
import {ConfigStore as ConfigStore2} from "../ConfigStore";
import {GetElement as GetElement2} from "../../dom/GetElement";
export function SetParent(parentElement) {
  if (parentElement) {
    ConfigStore2.set(CONFIG_DEFAULTS.PARENT, GetElement2(parentElement));
  }
}
