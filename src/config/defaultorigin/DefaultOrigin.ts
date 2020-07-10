import { SetDefaultOrigin } from './SetDefaultOrigin';

export function DefaultOrigin (x: number = 0.5, y: number = x): () => void
{
    return (): void =>
    {
        SetDefaultOrigin(x, y);
    };
}
