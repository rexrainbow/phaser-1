import { SetCanvasContext } from './SetCanvasContext';

export function CanvasContext (contextAttributes: CanvasRenderingContext2DSettings): () => void
{
    return (): void =>
    {
        SetCanvasContext(contextAttributes);
    };
}
