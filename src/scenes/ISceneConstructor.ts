import IScene from './IScene';
import ISceneConfig from './ISceneConfig';

export default interface ISceneConstructor
{
    new (config?: string | ISceneConfig): IScene
}
