import { SetSize } from './SetSize';

export function Size (width: number = 800, height: number = 600, resolution: number = 1): () => void
{
    return (): void =>
    {
        SetSize(width, height, resolution);
    };
}
