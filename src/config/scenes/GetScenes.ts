import { CONFIG_DEFAULTS } from '../const';
import { ConfigStore } from '../ConfigStore';
import { ISceneConstructor } from '../../scenes/ISceneConstructor';

export function GetScenes (): ISceneConstructor[]
{
    return ConfigStore.get(CONFIG_DEFAULTS.SCENES);
}
