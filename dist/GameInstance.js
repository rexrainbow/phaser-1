let instance;
let frame = 0;
let elapsed = 0;
const GameInstance = {
    get: () => {
        return instance;
    },
    set: (game) => {
        instance = game;
    },
    getFrame: () => {
        return frame;
    },
    setFrame: (current) => {
        frame = current;
    },
    getElapsed: () => {
        return elapsed;
    },
    setElapsed: (current) => {
        elapsed = current;
    }
};

export { GameInstance, elapsed, frame, instance };
