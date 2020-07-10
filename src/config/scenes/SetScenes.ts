import { CONFIG_DEFAULTS } from '../const';
import { ConfigStore } from '../ConfigStore';
import { ISceneConstructor } from '../../scenes/ISceneConstructor';

export function SetScenes (scenes?: ISceneConstructor | Array<ISceneConstructor>): void
{
    ConfigStore.set(CONFIG_DEFAULTS.SCENES, [].concat(scenes));
}
