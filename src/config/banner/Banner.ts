import { SetBanner } from './SetBanner';

export function Banner (title?: string, version?: string, url?: string, color?: string, background?: string): () => void
{
    return (): void =>
    {
        SetBanner(title, version, url, color, background);
    };
}
