import IBaseScene from '../scenes/IBaseScene';

let _scenes: any[] = [];

function Scenes (scenes?: IBaseScene | IBaseScene[] | any | any[])
{
    return () => {

        _scenes = [].concat(scenes);

    };
}

function GetScenes (): any[]
{
    return _scenes;
}

export {
    Scenes,
    GetScenes
}
