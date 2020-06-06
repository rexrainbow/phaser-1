import { gl } from '../GL';

export function DeleteGLBuffer (buffer: WebGLBuffer): void
{
    if (gl.isBuffer(buffer))
    {
        gl.deleteBuffer(buffer);
    }
}
