import { GL } from '../GL';
import { IRenderPass } from './IRenderPass';
import { Rectangle } from '../../../geom/rectangle';

export function BindViewport (renderPass: IRenderPass, viewport?: Rectangle): void
{
    if (!viewport)
    {
        viewport = renderPass.currentViewport;

        if (!viewport)
        {
            return;
        }
    }

    const gl = GL.get();

    const glv = gl.getParameter(gl.VIEWPORT);

    if (glv[0] !== viewport.x || glv[1] !== viewport.y || glv[2] !== viewport.width || glv[3] !== viewport.height)
    {
        gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height);
    }
}
