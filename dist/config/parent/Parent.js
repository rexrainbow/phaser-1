import '../const.js';
import '../ConfigStore.js';
import '../../dom/GetElement.js';
import { SetParent } from './SetParent.js';

function Parent(parentElement) {
    return () => {
        SetParent(parentElement);
    };
}

export { Parent };
