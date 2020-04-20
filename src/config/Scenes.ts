import IScene from '../scenes/IScene';

type SceneClass = {
    new (): IScene;
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
};
