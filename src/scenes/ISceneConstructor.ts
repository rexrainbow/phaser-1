import { IScene } from './IScene';
import { ISceneConfig } from './ISceneConfig';

export interface ISceneConstructor
{
    new (config?: string | ISceneConfig): IScene;
}
