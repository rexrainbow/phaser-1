import { CONFIG_DEFAULTS } from '../const';
import { ConfigStore } from '../ConfigStore';

export function SetDefaultOrigin (x: number = 0.5, y: number = x): void
{
    ConfigStore.set(CONFIG_DEFAULTS.DEFAULT_ORIGIN, { x, y });
}
