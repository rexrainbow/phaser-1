import { CONFIG_DEFAULTS } from '../const';
import { ConfigStore } from '../ConfigStore';
import { IRendererConstructor } from '../../renderer/IRendererConstructor';

export function SetRenderer (renderer: IRendererConstructor): void
{
    ConfigStore.set(CONFIG_DEFAULTS.RENDERER, renderer);
}
