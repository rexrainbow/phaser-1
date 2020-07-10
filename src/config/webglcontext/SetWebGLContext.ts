import { CONFIG_DEFAULTS } from '../const';
import { ConfigStore } from '../ConfigStore';

export function SetWebGLContext (contextAttributes: WebGLContextAttributes): void
{
    ConfigStore.set(CONFIG_DEFAULTS.WEBGL_CONTEXT, contextAttributes);
}
