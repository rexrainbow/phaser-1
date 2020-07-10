import { CONFIG_DEFAULTS } from '../const';
import { ConfigStore } from '../ConfigStore';

export function GetDefaultOriginX (): number
{
    return ConfigStore.get(CONFIG_DEFAULTS.DEFAULT_ORIGIN).x;
}
