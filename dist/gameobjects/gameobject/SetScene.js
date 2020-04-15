export default function SetScene(scene, ...child) {
    child.forEach(entity => {
        entity.scene = scene;
    });
}
//# sourceMappingURL=SetScene.js.map