import ISceneConfig from './ISceneConfig';
import IBaseScene from './IBaseScene';

export default interface IBaseSceneConstructor
{
    new (config?: string | ISceneConfig): IBaseScene
}
