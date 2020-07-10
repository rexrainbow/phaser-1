import '../const.js';
import '../ConfigStore.js';
import { SetBackgroundColor } from './SetBackgroundColor.js';

function BackgroundColor(color) {
    return () => {
        SetBackgroundColor(color);
    };
}

export { BackgroundColor };
