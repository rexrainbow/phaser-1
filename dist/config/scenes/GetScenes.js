import { CONFIG_DEFAULTS } from '../const.js';
import { ConfigStore } from '../ConfigStore.js';

function GetScenes() {
    return ConfigStore.get(CONFIG_DEFAULTS.SCENES);
}

export { GetScenes };
