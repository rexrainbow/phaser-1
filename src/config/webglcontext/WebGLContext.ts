import { SetWebGLContext } from './SetWebGLContext';

export function WebGLContext (contextAttributes: WebGLContextAttributes): () => void
{
    return (): void =>
    {
        SetWebGLContext(contextAttributes);
    };
}
