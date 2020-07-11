import {CONFIG_DEFAULTS} from "../const";
import {ConfigStore as ConfigStore2} from "../ConfigStore";
export function SetBatchSize(size) {
  ConfigStore2.set(CONFIG_DEFAULTS.BATCH_SIZE, size);
}
