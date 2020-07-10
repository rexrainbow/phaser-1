import { CONFIG_DEFAULTS } from '../const';
import { ConfigStore } from '../ConfigStore';

export function SetSize (width: number = 800, height: number = 600, resolution: number = 1): void
{
    if (resolution === 0)
    {
        resolution = window.devicePixelRatio;
    }

    ConfigStore.set(CONFIG_DEFAULTS.SIZE, { width, height, resolution });
}
