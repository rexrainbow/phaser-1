import { CONFIG_DEFAULTS } from '../const.js';
import { ConfigStore } from '../ConfigStore.js';
import { GetElement } from '../../dom/GetElement.js';

function SetParent(parentElement) {
    if (parentElement) {
        ConfigStore.set(CONFIG_DEFAULTS.PARENT, GetElement(parentElement));
    }
}

export { SetParent };
