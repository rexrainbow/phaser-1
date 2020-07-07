import { AddShader } from './AddShader.js';
import { BindShader } from './BindShader.js';

function SetShader(renderPass, shader, textureID) {
    const entry = AddShader(renderPass, shader, textureID);
    BindShader(renderPass, entry);
    renderPass.currentShader = entry;
}

export { SetShader };
