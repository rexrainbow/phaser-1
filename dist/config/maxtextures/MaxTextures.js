import '../const.js';
import '../ConfigStore.js';
import { SetMaxTextures } from './SetMaxTextures.js';

function MaxTextures(max = 0) {
    return () => {
        SetMaxTextures(max);
    };
}

export { MaxTextures };
