import { BindViewport } from './BindViewport';
import { IRenderPass } from './IRenderPass';
import { Rectangle } from '../../../geom/rectangle/Rectangle';

export function SetDefaultViewport (renderPass: IRenderPass, x: number = 0, y: number = 0, width: number = 0, height: number = 0): void
{
    const entry = new Rectangle(x, y, width, height);

    //  The default entry always goes into index zero
    renderPass.viewportStack[0] = entry;

    renderPass.currentViewport = entry;
    renderPass.defaultViewport = entry;

    BindViewport(renderPass);
}
