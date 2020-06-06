import { IRenderPass } from './IRenderPass';

export function SetDefaultBlendMode (renderPass: IRenderPass, enable: boolean, sfactor?: number, dfactor?: number): void
{
    const entry = { enable, sfactor, dfactor };

    //  The default entry always goes into index zero
    renderPass.blendModeStack[0] = entry;

    renderPass.currentBlendMode = entry;
    renderPass.defaultBlendMode = entry;
}
