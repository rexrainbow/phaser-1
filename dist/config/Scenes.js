let _scenes = [];
function Scenes(scenes) {
    return () => {
        _scenes = [].concat(scenes);
    };
}
function GetScenes() {
    return _scenes;
}
export { Scenes, GetScenes };
//# sourceMappingURL=Scenes.js.map