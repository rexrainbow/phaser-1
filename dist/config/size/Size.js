import '../const.js';
import '../ConfigStore.js';
import { SetSize } from './SetSize.js';

function Size(width = 800, height = 600, resolution = 1) {
    return () => {
        SetSize(width, height, resolution);
    };
}

export { Size };
