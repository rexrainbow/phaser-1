import { CONFIG_DEFAULTS } from '../const.js';
import { ConfigStore } from '../ConfigStore.js';

function SetCanvasContext(contextAttributes) {
    ConfigStore.set(CONFIG_DEFAULTS.CANVAS_CONTEXT, contextAttributes);
}

export { SetCanvasContext };
