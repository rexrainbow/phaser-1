import IBaseScene from '../scenes/IBaseScene';

type SceneClass = {
    new (): IBaseScene;
}

let _scenes: SceneClass[] = [];

function Scenes(scenes?: SceneClass | Array<SceneClass>)
{
    return () => {

        _scenes = [].concat(scenes);

    };
}

function GetScenes (): SceneClass[]
{
    return _scenes;
}

export {
    Scenes,
    GetScenes
}

