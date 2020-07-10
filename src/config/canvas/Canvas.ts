import { CanvasRenderer } from '../../renderer/canvas/CanvasRenderer';
import { SetRenderer } from '../renderer/SetRenderer';

export function Canvas (): () => void
{
    return (): void =>
    {
        SetRenderer(CanvasRenderer);
    };
}
