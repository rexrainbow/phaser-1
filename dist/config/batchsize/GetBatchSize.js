import {CONFIG_DEFAULTS} from "../const";
import {ConfigStore as ConfigStore2} from "../ConfigStore";
export function GetBatchSize() {
  return ConfigStore2.get(CONFIG_DEFAULTS.BATCH_SIZE);
}
