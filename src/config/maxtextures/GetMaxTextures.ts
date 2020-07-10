import { CONFIG_DEFAULTS } from '../const';
import { ConfigStore } from '../ConfigStore';

export function GetMaxTextures (): number
{
    return ConfigStore.get(CONFIG_DEFAULTS.MAX_TEXTURES);
}
