import { CONFIG_DEFAULTS } from '../const.js';
import { ConfigStore } from '../ConfigStore.js';

function GetRenderer() {
    return ConfigStore.get(CONFIG_DEFAULTS.RENDERER);
}

export { GetRenderer };
