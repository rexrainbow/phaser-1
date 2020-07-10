import '../const.js';
import '../ConfigStore.js';
import { SetWebGLContext } from './SetWebGLContext.js';

function WebGLContext(contextAttributes) {
    return () => {
        SetWebGLContext(contextAttributes);
    };
}

export { WebGLContext };
