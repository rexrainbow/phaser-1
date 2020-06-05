import { AddBlendMode } from './AddBlendMode';
import { BindBlendMode } from './BindBlendMode';
import { IRenderPass } from './IRenderPass';

export function SetBlendMode (renderPass: IRenderPass, enable: boolean, sfactor?: number, dfactor?: number): void
{
    const entry = AddBlendMode(renderPass, enable, sfactor, dfactor);

    BindBlendMode(renderPass, entry);

    renderPass.currentBlendMode = entry;
}
