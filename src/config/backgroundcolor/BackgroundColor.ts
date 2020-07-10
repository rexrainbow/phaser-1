import { SetBackgroundColor } from './SetBackgroundColor';

export function BackgroundColor (color: number): () => void
{
    return (): void =>
    {
        SetBackgroundColor(color);
    };
}
