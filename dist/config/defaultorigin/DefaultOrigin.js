import '../const.js';
import '../ConfigStore.js';
import { SetDefaultOrigin } from './SetDefaultOrigin.js';

function DefaultOrigin(x = 0.5, y = x) {
    return () => {
        SetDefaultOrigin(x, y);
    };
}

export { DefaultOrigin };
