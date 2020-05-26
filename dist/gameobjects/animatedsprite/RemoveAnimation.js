function RemoveAnimation(key, ...sprites) {
    sprites.forEach(sprite => {
        sprite.anims.delete(key);
    });
    return sprites;
}

export { RemoveAnimation };
