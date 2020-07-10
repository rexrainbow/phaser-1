import { CONFIG_DEFAULTS } from '../const';
import { ConfigStore } from '../ConfigStore';

export function GetBackgroundColor (): number
{
    return ConfigStore.get(CONFIG_DEFAULTS.BACKGROUND_COLOR);
}
