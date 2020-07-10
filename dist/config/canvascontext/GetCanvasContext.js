import { CONFIG_DEFAULTS } from '../const.js';
import { ConfigStore } from '../ConfigStore.js';

function GetCanvasContext() {
    return ConfigStore.get(CONFIG_DEFAULTS.CANVAS_CONTEXT);
}

export { GetCanvasContext };
