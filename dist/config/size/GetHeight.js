import { CONFIG_DEFAULTS } from '../const.js';
import { ConfigStore } from '../ConfigStore.js';

function GetHeight() {
    return ConfigStore.get(CONFIG_DEFAULTS.SIZE).height;
}

export { GetHeight };
