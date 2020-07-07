let batchSize = 4096;
function BatchSize(size) {
    return () => {
        batchSize = size;
    };
}

export { BatchSize, batchSize };
