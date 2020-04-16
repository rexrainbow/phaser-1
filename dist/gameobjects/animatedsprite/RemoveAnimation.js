export default function RemoveAnimation(key, ...sprite) {
    sprite.forEach(entity => {
        entity.anims.delete(key);
    });
}
//# sourceMappingURL=RemoveAnimation.js.map