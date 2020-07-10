import { CONFIG_DEFAULTS } from '../const';
import { ConfigStore } from '../ConfigStore';

export function GetHeight (): number
{
    return ConfigStore.get(CONFIG_DEFAULTS.SIZE).height;
}
