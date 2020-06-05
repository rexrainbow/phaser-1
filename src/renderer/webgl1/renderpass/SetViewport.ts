import { AddViewport } from './AddViewport';
import { BindViewport } from './BindViewport';
import { IRenderPass } from './IRenderPass';

export function SetViewport (renderPass: IRenderPass, x: number = 0, y: number = 0, width: number = 0, height: number = 0): void
{
    const entry = AddViewport(renderPass, x, y, width, height);

    BindViewport(renderPass, entry);

    renderPass.currentViewport = entry;
}
