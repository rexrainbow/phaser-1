import { ISceneConstructor } from '../../scenes/ISceneConstructor';
import { SetScenes } from './SetScenes';

export function Scenes (scenes?: ISceneConstructor | Array<ISceneConstructor>): () => void
{
    return (): void =>
    {
        SetScenes(scenes);
    };
}
