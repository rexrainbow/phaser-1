import { IRenderPass } from './IRenderPass';
import { Rectangle } from '../../../geom/rectangle/Rectangle';

export function AddViewport (renderPass: IRenderPass, x: number = 0, y: number = 0, width: number = 0, height: number = 0): Rectangle
{
    const viewport = new Rectangle(x, y, width, height);

    renderPass.viewportStack.push(viewport);

    return viewport;
}
