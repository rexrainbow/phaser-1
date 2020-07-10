import { CONFIG_DEFAULTS } from '../const';
import { ConfigStore } from '../ConfigStore';

export function SetBanner (title: string = '', version: string = '', url: string = '', color: string = '#fff', background: string = 'linear-gradient(#3e0081 40%, #00bcc3)'): void
{
    ConfigStore.set(CONFIG_DEFAULTS.BANNER, { title, version, url, color, background });
}
