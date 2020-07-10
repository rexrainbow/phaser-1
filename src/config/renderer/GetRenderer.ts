import { CONFIG_DEFAULTS } from '../const';
import { ConfigStore } from '../ConfigStore';
import { IRendererConstructor } from '../../renderer/IRendererConstructor';

export function GetRenderer (): IRendererConstructor
{
    return ConfigStore.get(CONFIG_DEFAULTS.RENDERER);
}
