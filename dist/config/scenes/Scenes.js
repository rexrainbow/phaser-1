import '../const.js';
import '../ConfigStore.js';
import { SetScenes } from './SetScenes.js';

function Scenes(scenes) {
    return () => {
        SetScenes(scenes);
    };
}

export { Scenes };
