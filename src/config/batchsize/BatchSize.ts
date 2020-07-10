import { SetBatchSize } from './SetBatchSize';

export function BatchSize (size: number): () => void
{
    return (): void =>
    {
        SetBatchSize(size);
    };
}
