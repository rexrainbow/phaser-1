function Play(key, config = {}, ...sprites) {
    const { speed = 24, repeat = 0, yoyo = false, startFrame = 0, delay = 0, repeatDelay = 0, onStart = null, onRepeat = null, onComplete = null, forceRestart = false } = config;
    sprites.forEach(sprite => {
        const data = sprite.animData;
        if (data.isPlaying) {
            if (data.currentAnim !== key) {
                data.isPlaying = false;
                data.currentAnim = '';
                if (data.onComplete) {
                    data.onComplete(sprite, data.currentAnim);
                }
            }
            else if (!forceRestart) {
                return;
            }
        }
        if (sprite.anims.has(key)) {
            data.currentFrames = sprite.anims.get(key);
            data.currentAnim = key;
            data.frameIndex = startFrame;
            data.animSpeed = 1000 / speed;
            data.nextFrameTime = data.animSpeed + delay;
            data.isPlaying = true;
            data.playingForward = true;
            data.yoyo = yoyo;
            data.repeatCount = repeat;
            data.delay = delay;
            data.repeatDelay = repeatDelay;
            data.onStart = onStart;
            data.onRepeat = onRepeat;
            data.onComplete = onComplete;
            if (delay === 0) {
                sprite.setFrame(data.currentFrames[data.frameIndex]);
                if (onStart) {
                    onStart(sprite, key);
                }
            }
            else {
                data.pendingStart = true;
            }
        }
    });
    return sprites;
}

export { Play };
