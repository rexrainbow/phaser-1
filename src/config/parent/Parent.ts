import { SetParent } from './SetParent';

export function Parent (parentElement?: string | HTMLElement): () => void
{
    return (): void =>
    {
        SetParent(parentElement);
    };
}
