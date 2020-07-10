import '../const.js';
import '../ConfigStore.js';
import { SetCanvasContext } from './SetCanvasContext.js';

function CanvasContext(contextAttributes) {
    return () => {
        SetCanvasContext(contextAttributes);
    };
}

export { CanvasContext };
