import { CONFIG_DEFAULTS } from '../const.js';
import { ConfigStore } from '../ConfigStore.js';

function SetBanner(title = '', version = '', url = '', color = '#fff', background = 'linear-gradient(#3e0081 40%, #00bcc3)') {
    ConfigStore.set(CONFIG_DEFAULTS.BANNER, { title, version, url, color, background });
}

export { SetBanner };
