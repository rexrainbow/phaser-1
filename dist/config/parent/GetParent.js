import { CONFIG_DEFAULTS } from '../const.js';
import { ConfigStore } from '../ConfigStore.js';

function GetParent() {
    return ConfigStore.get(CONFIG_DEFAULTS.PARENT);
}

export { GetParent };
