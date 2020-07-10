import { CONFIG_DEFAULTS } from '../const';
import { ConfigStore } from '../ConfigStore';

export function GetResolution (): number
{
    return ConfigStore.get(CONFIG_DEFAULTS.SIZE).resolution;
}
