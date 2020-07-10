import { CONFIG_DEFAULTS } from '../const';
import { ConfigStore } from '../ConfigStore';

export function GetDefaultOriginY (): number
{
    return ConfigStore.get(CONFIG_DEFAULTS.DEFAULT_ORIGIN).y;
}
