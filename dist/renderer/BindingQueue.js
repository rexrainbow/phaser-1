const queue = [];
const BindingQueue = {
    add: (texture) => {
        queue.push(texture);
    },
    get: () => {
        return queue;
    },
    clear: () => {
        queue.length = 0;
    }
};

export { BindingQueue };
