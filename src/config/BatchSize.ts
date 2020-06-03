export let batchSize = 4096;

export function BatchSize (size: number): () => void
{
    return (): void =>
    {
        batchSize = size;
    };
}
