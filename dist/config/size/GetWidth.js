import { CONFIG_DEFAULTS } from '../const.js';
import { ConfigStore } from '../ConfigStore.js';

function GetWidth() {
    return ConfigStore.get(CONFIG_DEFAULTS.SIZE).width;
}

export { GetWidth };
