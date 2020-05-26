function Stop(...sprites) {
    sprites.forEach(sprite => {
        const data = sprite.animData;
        data.isPlaying = false;
        data.currentAnim = '';
        if (data.onComplete) {
            data.onComplete(sprite, data.currentAnim);
        }
    });
    return sprites;
}

export { Stop };
