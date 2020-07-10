function ClearAnimations(...sprites) {
    sprites.forEach(sprite => {
        sprite.anims.clear();
    });
    return sprites;
}

export { ClearAnimations };
