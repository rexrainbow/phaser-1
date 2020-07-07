import '../GL.js';
import { AddBlendMode } from './AddBlendMode.js';
import { BindBlendMode } from './BindBlendMode.js';

function SetBlendMode(renderPass, enable, sfactor, dfactor) {
    const entry = AddBlendMode(renderPass, enable, sfactor, dfactor);
    BindBlendMode(renderPass, entry);
    renderPass.currentBlendMode = entry;
}

export { SetBlendMode };
