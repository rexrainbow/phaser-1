import { CONFIG_DEFAULTS } from '../const';
import { ConfigStore } from '../ConfigStore';

export function GetWidth (): number
{
    return ConfigStore.get(CONFIG_DEFAULTS.SIZE).width;
}
