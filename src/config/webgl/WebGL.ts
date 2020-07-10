import { SetRenderer } from '../renderer/SetRenderer';
import { WebGLRenderer } from '../../renderer/webgl1/WebGLRenderer';

export function WebGL (): () => void
{
    return (): void =>
    {
        SetRenderer(WebGLRenderer);
    };
}
