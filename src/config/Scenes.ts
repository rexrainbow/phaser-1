import { ISceneConstructor } from '../scenes/ISceneConstructor';

let _scenes: ISceneConstructor[] = [];

function Scenes (scenes?: ISceneConstructor | Array<ISceneConstructor>): () => void
{
    return (): void =>
    {
        _scenes = [].concat(scenes);
    };
}

function GetScenes (): ISceneConstructor[]
{
    return _scenes;
}

export {
    Scenes,
    GetScenes
};
