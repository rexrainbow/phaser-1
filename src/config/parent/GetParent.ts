import { CONFIG_DEFAULTS } from '../const';
import { ConfigStore } from '../ConfigStore';

export function GetParent (): string | HTMLElement | undefined
{
    return ConfigStore.get(CONFIG_DEFAULTS.PARENT);
}
