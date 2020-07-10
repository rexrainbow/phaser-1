import '../const.js';
import '../ConfigStore.js';
import { SetBanner } from './SetBanner.js';

function Banner(title, version, url, color, background) {
    return () => {
        SetBanner(title, version, url, color, background);
    };
}

export { Banner };
