import { WebGLRenderer as Renderer } from '../renderer/webgl1/WebGLRenderer';
import { SetRenderer } from './SetRenderer';

function SetWebGL (): () => void
{
    return (): void =>
    {
        SetRenderer(Renderer);
    };
}

export {
    SetWebGL
};
