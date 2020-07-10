import { CONFIG_DEFAULTS } from '../const.js';
import { ConfigStore } from '../ConfigStore.js';

function GetResolution() {
    return ConfigStore.get(CONFIG_DEFAULTS.SIZE).resolution;
}

export { GetResolution };
