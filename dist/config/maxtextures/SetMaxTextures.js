import { CONFIG_DEFAULTS } from '../const.js';
import { ConfigStore } from '../ConfigStore.js';

function SetMaxTextures(max) {
    ConfigStore.set(CONFIG_DEFAULTS.MAX_TEXTURES, max);
}

export { SetMaxTextures };
