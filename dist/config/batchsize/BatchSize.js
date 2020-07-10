import '../const.js';
import '../ConfigStore.js';
import { SetBatchSize } from './SetBatchSize.js';

function BatchSize(size) {
    return () => {
        SetBatchSize(size);
    };
}

export { BatchSize };
