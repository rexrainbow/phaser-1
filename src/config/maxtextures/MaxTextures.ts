import { SetMaxTextures } from './SetMaxTextures';

export function MaxTextures (max: number = 0): () => void
{
    return (): void =>
    {
        SetMaxTextures(max);
    };
}
