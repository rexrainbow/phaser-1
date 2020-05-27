import { CanvasRenderer as Renderer } from '../renderer/canvas/CanvasRenderer';
import { SetRenderer } from './SetRenderer';

function SetCanvas (): () => void
{
    return (): void =>
    {
        SetRenderer(Renderer);
    };
}

export {
    SetCanvas
};
